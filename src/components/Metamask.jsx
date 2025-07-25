import React from 'react';
import { useWallet } from './WalletProvider';

const SimpleWalletConnect = () => {
    const { account, connectWallet, disconnect, error, isConnected } = useWallet();

    return (
        <>
            {error && <div className="text-danger small">{error}</div>}
            {!isConnected ? (
                <button
                    onClick={connectWallet}
                    className="btn btn-outline-dark m-2"
                >
                    <i className="fa fa-wallet mr-1"></i> Connect Wallet
                </button>
            ) : (
                <div className="dropdown m-2">
                    <button
                        className="btn btn-success dropdown-toggle"
                        type="button"
                        id="walletDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fa fa-wallet mr-1"></i> {account.slice(0, 6)}...{account.slice(-4)}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="walletDropdown">
                        <button className="dropdown-item" onClick={disconnect}>
                            <i className="fa fa-sign-out-alt mr-1"></i> Disconnect
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SimpleWalletConnect;