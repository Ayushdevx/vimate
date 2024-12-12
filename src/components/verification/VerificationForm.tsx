import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { useVerificationStore } from '../../store/useVerificationStore';
import { Button } from '../ui/Button';

export const VerificationForm: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const { submitVerification } = useVerificationStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitVerification({
      userId: 'currentUser', // Replace with actual user ID
      studentId,
      institutionalEmail: email
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 text-purple-600 mb-4">
        <Shield className="w-6 h-6" />
        <h3 className="text-lg font-semibold">Verify Your Account</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student ID
          </label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="Enter your VIT student ID"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Institutional Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="your.name@vitstudent.ac.in"
          />
        </div>

        <Button type="submit" className="w-full">
          Submit for Verification
        </Button>
      </form>
    </div>
  );
};