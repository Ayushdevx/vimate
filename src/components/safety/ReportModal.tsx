import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { ReportReason } from '../../types/safety';
import { useSafetyStore } from '../../store/useSafetyStore';
import { Button } from '../ui/Button';

interface ReportModalProps {
  reportedUserId: string;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ reportedUserId, onClose }) => {
  const [reason, setReason] = useState<ReportReason>('inappropriate_content');
  const [description, setDescription] = useState('');
  const { submitReport } = useSafetyStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitReport({
      reporterId: 'currentUser', // Replace with actual user ID
      reportedUserId,
      reason,
      description
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center gap-2 text-red-600 mb-4">
          <AlertTriangle className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Report User</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reason for Report
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value as ReportReason)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="inappropriate_content">Inappropriate Content</option>
              <option value="harassment">Harassment</option>
              <option value="fake_profile">Fake Profile</option>
              <option value="spam">Spam</option>
              <option value="underage">Underage User</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="Please provide details about the issue..."
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};