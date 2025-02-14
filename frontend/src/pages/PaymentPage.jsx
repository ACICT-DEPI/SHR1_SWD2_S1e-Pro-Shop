import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '@/components/FormContainer';
import CheckoutSteps from '@/components/CheckoutSteps';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/placeorder');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PaymentMethod = ({ icon, label }) => (
    <motion.div
      className="flex items-center p-4 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
      <span className="ml-3 font-medium text-gray-800 dark:text-gray-200">
        {label}
      </span>
    </motion.div>
  );

  return (
    <FormContainer>
      <CheckoutSteps currentStep={3} />
      <motion.div
        className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 px-8 py-8 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Payment Methods
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          The following payment method will be available on the next page:
        </p>
        <div className="space-y-4 mb-8">
          <PaymentMethod
            icon={
              <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            }
            label="Credit Card"
          />
        </div>
        <Button
          onClick={handleContinue}
          className="w-full py-3 px-4 font-bold rounded-lg transition-colors"
        >
          Continue to Place Order
        </Button>
      </motion.div>
    </FormContainer>
  );
};

export default PaymentPage;
