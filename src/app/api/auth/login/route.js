import jwt from 'jsonwebtoken';
import User from '../../../../lib/models/User';
import connectDB from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    await connectDB();

    let user = await User.findOne({ email });

    const isAdminEmail = email === process.env.ADMIN_EMAIL;

    // If logging in with the configured ADMIN_EMAIL but record doesn't exist in MongoDB yet, create it
    if (!user && isAdminEmail && process.env.ADMIN_PASSWORD) {
      if (password === process.env.ADMIN_PASSWORD) {
        user = await User.create({
          name: 'Admin',
          email,
          password: process.env.ADMIN_PASSWORD,
          role: 'admin',
        });
      }
    } else if (user && isAdminEmail && user.role !== 'admin') {
      user.role = 'admin';
      await user.save();
    }

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // For the admin account, use the password set in .env
    let isMatch = false;
    if (isAdminEmail && process.env.ADMIN_PASSWORD) {
      isMatch = password === process.env.ADMIN_PASSWORD;
    } else {
      isMatch = await user.matchPassword(password);
    }

    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    return NextResponse.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      token,
    });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { message: 'Server error during login' },
      { status: 500 }
    );
  }
}
