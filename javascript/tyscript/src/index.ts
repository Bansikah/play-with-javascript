import axios from 'axios';

const OKPage = (): void => {
  const baseURL: string = 'http://localhost:5173'; // Specifying the base URL
  const api = axios.create({
    baseURL,
    timeout: 5000, // Set timeout to 5 seconds
  });

    // Define a mock function to simulate API responses, allowing for different scenarios
    const mockSend_MoneyAPI = async (
        senderPhoneNumber: string,
        recipientPhoneNumber: string,
        amount: number,
        mockSuccess: boolean = true
      ): Promise<unknown> => {
        try {
          console.log('Making mock API call...'); // Clarifying it's a mock call
          if (mockSuccess) {
            // Simulate a successful response
            const response = {
              status: 'SUCCESS',
              message: 'Transaction completed successfully',
              transactionId: '123456', // Example transaction ID
              // ...other relevant data
            };
            return response;
          } else {
            // Simulate an error response
            throw new Error('Transaction failed'); // Or throw a custom error with more details
          }
        } catch (error) {
          console.error('Mock API call error:', error);
          throw error;
        }
      };



  // Call the mockSend_MoneyAPI function, demonstrating both success and failure
  mockSend_MoneyAPI('1234567890', '0987654321', 50)
  .then((response) => {
    console.log('Mock API Successful Response:', response);
  })
  .catch((error) => {
    console.error('Mock API Error Response:', error);
  });

mockSend_MoneyAPI('4567890123', '1234567890', 100, false) // Simulate a failure
  .then((response) => {
    console.log('Mock API Successful Response:', response); // This won't be reached
  })
  .catch((error) => {
    console.error('Mock API Error Response:', error);
  });
};

export default OKPage;
