"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PageHeader from "../components/common/PageHeader"
import { Card } from "../ui/Card"
import CheckoutSummary from "../components/checkout/CheckoutSummary"
import CheckoutForm from "../components/checkout/CheckoutFrom"
import CheckoutSuccess from "../components/checkout/CheckoutSuccess"

const Checkout = () => {
  const { ticketType } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  // Ticket details based on type
  const ticketDetails = {
    standard: {
      name: "Standard Ticket",
      price: 2500,
      color: "from-blue-500 to-blue-600",
      description: "General access to all sessions and exhibition area",
    },
    gold: {
      name: "Gold Ticket",
      price: 5000,
      color: "from-amber-500 to-amber-600",
      description: "Enhanced experience with networking opportunities and premium features",
    },
    premium: {
      name: "Premium Ticket",
      price: 10000,
      color: "from-indigo-600 to-purple-600",
      description: "VIP experience with exclusive access and personalized benefits",
    },
  }

  // Redirect if invalid ticket type
  useEffect(() => {
    if (!ticketType || !ticketDetails[ticketType]) {
      navigate("/tickets")
    }
  }, [ticketType, navigate])

  const handlePayment = (paymentData) => {
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setOrderComplete(true)

      // Generate order details
      const orderNumber = `TPS-${Math.floor(100000 + Math.random() * 900000)}`
      const orderDate = new Date().toISOString()

      setOrderDetails({
        orderNumber,
        orderDate,
        ticketType,
        ticketName: ticketDetails[ticketType]?.name,
        price: ticketDetails[ticketType]?.price,
        paymentMethod: paymentData.paymentMethod,
        email: paymentData.email,
      })
    }, 2000)
  }

  if (!ticketType || !ticketDetails[ticketType]) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Complete Your Purchase"
        description={`Checkout for ${ticketDetails[ticketType]?.name}`}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        {orderComplete ? (
          <CheckoutSuccess orderDetails={orderDetails} />
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-6 md:p-8 shadow-lg">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Checkout</h2>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          step >= 1 ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        1
                      </div>
                      <div className={`w-12 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          step >= 2 ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        2
                      </div>
                    </div>
                  </div>

                  {step === 1 ? (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <CheckoutForm onNext={() => setStep(2)} ticketType={ticketType} />
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                      <CheckoutForm
                        step={2}
                        onBack={() => setStep(1)}
                        onSubmit={handlePayment}
                        isLoading={isLoading}
                        ticketType={ticketType}
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <div>
              <CheckoutSummary ticketDetails={ticketDetails[ticketType]} ticketType={ticketType} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout

