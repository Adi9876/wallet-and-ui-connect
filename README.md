## Run Locally

Clone the project

```bash
  git clone https://dredsoft-admin@bitbucket.org/dredsoft/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

---

### What’s Implemented

- **Extra Requirements needed for transaction**
  ```bash
  npm install ethers
  ```

- **WalletContext**
  Added a useContext to maintain a clear state across the entire website.

- **Inside the Checkout page**
  Added a dummy transaction to the checkout with option to checkout with wallet next to checkout with card.
  Until the transaction is confirmed the state is not changed. Once confirmed the page shows order placed.

- **Wallet Connection**  
  Users can connect their MetaMask wallet. The flow automatically prompts MetaMask to connect when initiating a transaction.

- **Simulated Blockchain Transaction**  
  A dummy transaction (sending 0 ETH to the user’s own address) is triggered via MetaMask to simulate a real checkout interaction. This sets up the logic needed for future smart contract integration.

- **Transaction Lifecycle UI**  
  The UI reacts to transaction state:
  - `pending`: Shows spinner and "Confirm in Wallet…" message
  - `success`: Displays a success alert
  - `failed`: Displays an error alert

---

### How to Use

1. Ensure MetaMask is installed in your browser.
2. Connect Wallet with button next to cart
3. Add items to the cart.
4. Navigate to `/checkout` and click **“Checkout with Wallet”**.
5. Approve the dummy transaction in MetaMask.
6. Observe UI feedback for success/failure.
