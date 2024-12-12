import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Camera, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

interface EditProfileModalProps {
  onClose: () => void;
  onSave: (data: any) => void;
  initialData: any;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  onClose,
  onSave,
  initialData
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={formData.photos[0]}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 p-2 rounded-full bg-purple-600 text-white shadow-lg"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.interests.map((interest: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm flex items-center gap-1"
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => {
                      const newInterests = formData.interests.filter((_: string, i: number) => i !== index);
                      setFormData({ ...formData, interests: newInterests });
                    }}
                    className="w-4 h-4 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center"
                  >
                    ×
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => {
                  const interest = prompt('Add new interest');
                  if (interest) {
                    setFormData({
                      ...formData,
                      interests: [...formData.interests, interest]
                    });
                  }
                }}
                className="px-3 py-1 border-2 border-dashed border-gray-300 rounded-full text-sm text-gray-500 hover:border-purple-500 hover:text-purple-500 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add Interest
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Changes
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};