import React, { useState, useEffect, useContext, createContext } from 'react';


const WalletContext = createContext();


export const useWallet = () => useContext(WalletContext);


export const WalletProvider = (props) => {
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      setError('MetaMask is not installed. Please install MetaMask extension.');
      return;
    }
    try {
      setError('');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      setError('Failed to connect to MetaMask');
    }
  };

  const disconnect = () => {
    setAccount('');
    setIsConnected(false);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        });

      const handleChainChanged = () => {
        window.location.reload();
      };

      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  return (
    <WalletContext.Provider value={{ account, connectWallet, disconnect, error, isConnected }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;