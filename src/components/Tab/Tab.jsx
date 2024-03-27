import React from 'react';
import Review from '../../Page/Review/Review';
import Features from '../../Page/Features/Features';
import {} from './Tab.css';

const Tabs = ({ carId, activeTab, setActiveTab }) => {
  return (
    <div className="tab">
      <ul className="tab-list">
        <li>
          <button
            type="button"
            className={activeTab === 'features' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeTab === 'review' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('review')}
          >
            Review
          </button>
        </li>
      </ul>
      {activeTab === 'features' ? (
        <div>
          <Features carId={carId} />
        </div>
      ) : (
        <div>
          <Review carId={carId} />
        </div>
      )}
    </div>
  );
};

export default Tabs;
