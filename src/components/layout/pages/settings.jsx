import React from 'react';
import AdminLayout from '../admin';

import SettingsForm from '../../comp/settings/settingsForm';

const Settings = () => {
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-center bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Settings
          </h1>
        </div>
      </div>
      <SettingsForm />
    </AdminLayout>
  );
};

export default Settings;
