import React from 'react';
import NestedDropdown from './NestedDropdown';

export default function Sidebar() {
  return (
    <div className="w-64 sticky rounded-lg  top-20 bg-gray-50 shadow-md p-4">
      {/* Product API Dropdown with nested Corporate Payments */}
      <NestedDropdown
        title="Featured Use Cases"
        initiallyOpen={true}
        items={[
          {
            label: 'Corporate Payments',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
          },
          { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
        ]}
      />

<NestedDropdown
        title="Product API"
        initiallyOpen={false}
        items={[
          {
            label: 'Corporate Payments',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
          },
          { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
        ]}
      />
      <NestedDropdown
        title="Cross Cutting"
        initiallyOpen={false}
        items={[
          {
            label: 'Corporate Payments',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
          },
          { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
           { label: 'Corporate Collections',
            subItems: [
              { label: 'Service Request' },
              { label: 'Reconciliation & Account Management' },
              { label: 'Beneficiary Management' },
              { label: 'Debit/Credit notification API' },
              { label: 'Corporate Payout' },
              { label: 'Instant Account Statement' },
            ],
           },
        ]}
      />
    </div>
  );
}
