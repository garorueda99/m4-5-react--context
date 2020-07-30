import React, { createContext, useState } from 'react';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = useState(1000);

  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  return (
    <GameContext.Provider
      value={{ numCookies, setNumCookies, purchasedItems, setPurchasedItems }}
    >
      {children}
    </GameContext.Provider>
  );
};
