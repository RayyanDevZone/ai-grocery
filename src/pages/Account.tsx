import React, { useState } from 'react';
import { User, ShoppingBag, MapPin, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileForm = () => (
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-neutral-700">First Name</label>
        <input type="text" defaultValue="John" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-green focus:ring-brand-green" />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700">Last Name</label>
        <input type="text" defaultValue="Doe" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-green focus:ring-brand-green" />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-neutral-700">Email</label>
      <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-green focus:ring-brand-green" />
    </div>
    <div className="pt-2">
      <button type="submit" className="rounded-md bg-brand-green px-4 py-2 text-white hover:bg-brand-green-dark">Save Changes</button>
    </div>
  </form>
);

const OrderHistory = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Your Orders</h3>
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-lg border p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold">Order #12345{i + 1}</p>
              <p className="text-sm text-neutral-500">Date: {new Date(Date.now() - i * 10 * 86400000).toLocaleDateString()}</p>
            </div>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Delivered</span>
          </div>
          <p className="mt-2">Total: ${(125.50 - i * 10).toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileForm />;
      case 'orders':
        return <OrderHistory />;
      case 'addresses':
        return <p>Manage your saved addresses here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-8">
      <h1 className="text-3xl font-bold text-neutral-800 mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="flex flex-col space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-md p-3 text-left transition-colors ${
                  activeTab === tab.id ? 'bg-brand-green-light text-brand-green font-semibold' : 'hover:bg-neutral-200/50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
             <button className="flex items-center gap-3 rounded-md p-3 text-left text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </aside>
        <main className="md:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg bg-white p-6 shadow-sm"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AccountPage;
