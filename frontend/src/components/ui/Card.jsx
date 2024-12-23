// import React from 'react';

// const Card = ({ children, className = '' }) => (
//   <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
//     {children}
//   </div>
// );

// export default Card;

import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
