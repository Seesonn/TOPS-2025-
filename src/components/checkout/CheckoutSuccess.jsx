

// // import { Link } from "react-router-dom"
// // import { Card } from "../../ui/Card"
// // import { Button } from "../../ui/Button"

// // const CheckoutSuccess = ({ orderDetails }) => {
// //   // Format date
// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString)
// //     return new Intl.DateTimeFormat("en-US", {
// //       year: "numeric",
// //       month: "long",
// //       day: "numeric",
// //       hour: "2-digit",
// //       minute: "2-digit",
// //     }).format(date)
// //   }

// //   return (
// //     <div className="max-w-2xl mx-auto">
// //       <Card className="p-8 shadow-lg text-center">
// //         <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-10 w-10"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //           </svg>
// //         </div>

// //         <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
// //         <p className="text-gray-600 mb-8">Thank you for your purchase. Your ticket has been confirmed.</p>

// //         <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
// //           <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Order Details</h3>

// //           <div className="space-y-3">
// //             <div className="flex justify-between">
// //               <span className="text-gray-600">Order Number:</span>
// //               <span className="font-medium">{orderDetails.orderNumber}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-gray-600">Date:</span>
// //               <span className="font-medium">{formatDate(orderDetails.orderDate)}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-gray-600">Ticket:</span>
// //               <span className="font-medium">{orderDetails.ticketName}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-gray-600">Amount Paid:</span>
// //               <span className="font-medium">NPR {(orderDetails.price * 1.13).toLocaleString()}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-gray-600">Payment Method:</span>
// //               <span className="font-medium">
// //                 {orderDetails.paymentMethod === "creditCard" && "Credit Card"}
// //                 {orderDetails.paymentMethod === "bankTransfer" && "Bank Transfer"}
// //                 {orderDetails.paymentMethod === "esewa" && "eSewa"}
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         <p className="text-gray-600 mb-4">
// //           We've sent a confirmation email to <strong>{orderDetails.email}</strong> with all the details.
// //         </p>

// //         <p className="text-gray-600 mb-8">
// //           Your e-ticket will be sent 2 weeks before the event. Please keep your order number for reference.
// //         </p>

// //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //           <Button variant="primary" as={Link} to="/">
// //             Return to Home
// //           </Button>
// //           <Button variant="outline" as="a" href="#" onClick={() => window.print()}>
// //             Print Receipt
// //           </Button>
// //         </div>
// //       </Card>
// //     </div>
// //   )
// // }

// // export default CheckoutSuccess


// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { Card } from "../../ui/Card"
// import { Button } from "../../ui/Button"
// import TicketTemplate from "./TicketTemplate"

// const CheckoutSuccess = ({ orderDetails }) => {
//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" }
//     return new Date(dateString).toLocaleDateString(undefined, options)
//   }

//   // Format price with commas
//   const formatPrice = (price) => {
//     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//   }

//   // Get user name from localStorage
//   const userName = localStorage.getItem("userName") || "Valued Customer"

//   // State for ticket download
//   const [showTicket, setShowTicket] = useState(false)
//   const [ticketDownloaded, setTicketDownloaded] = useState(false)

//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0)
//   }, [])

//   if (!orderDetails) return null

//   // Get payment method display name
//   const getPaymentMethodName = (method) => {
//     const methods = {
//       creditCard: "Credit Card",
//       bankTransfer: "Bank Transfer",
//       esewa: "eSewa",
//       khalti: "Khalti",
//     }
//     return methods[method] || method
//   }

//   // Handle ticket download
//   const handleDownloadTicket = () => {
//     setShowTicket(true)

//     // Simulate download delay
//     setTimeout(() => {
//       const ticketElement = document.getElementById("ticket-template")

//       if (ticketElement) {
//         // Create a function to download the ticket as an image
//         const downloadTicket = () => {
//           // Use html2canvas or similar library in a real implementation
//           // For this demo, we'll just simulate the download
//           console.log("Downloading ticket...")
//           setTicketDownloaded(true)

//           // In a real implementation, you would use:
//           html2canvas(ticketElement).then(canvas => {
//             const link = document.createElement('a');
//             link.download = `ToPS_Ticket_${orderDetails.orderNumber}.png`;
//             link.href = canvas.toDataURL('image/png');
//             link.click();
//           });
//         }

//         downloadTicket()
//       }
//     }, 500)
//   }

//   // Handle save to device
//   const handleSaveToDevice = () => {
//     // In a real implementation, you would:
//     // 1. Generate a PDF or image of the ticket
//     // 2. Save it to the device using the appropriate API

//     // For mobile devices, you might use:
//     // - For iOS: FileSaver.js or similar
//     // - For Android: Use the Download API

//     // For this demo, we'll simulate saving
//     alert("Ticket saved to your device!")
//   }

//   return (
//     <div className="max-w-2xl mx-auto">
//       <Card className="p-8 shadow-lg">
//         <div className="text-center mb-8">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg
//               className="w-10 h-10 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You, {userName.split(" ")[0]}!</h2>
//           <p className="text-lg text-gray-600">Your order has been confirmed</p>
//         </div>

//         <div className="border-t border-b border-gray-200 py-6 mb-6">
//           <div className="flex justify-between mb-4">
//             <span className="text-gray-600">Order Number:</span>
//             <span className="font-semibold">{orderDetails.orderNumber}</span>
//           </div>
//           <div className="flex justify-between mb-4">
//             <span className="text-gray-600">Order Date:</span>
//             <span className="font-semibold">{formatDate(orderDetails.orderDate)}</span>
//           </div>
//           <div className="flex justify-between mb-4">
//             <span className="text-gray-600">Email:</span>
//             <span className="font-semibold">{orderDetails.email}</span>
//           </div>
//           <div className="flex justify-between mb-4">
//             <span className="text-gray-600">Payment Method:</span>
//             <span className="font-semibold">{getPaymentMethodName(orderDetails.paymentMethod)}</span>
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <div className="flex justify-between mb-2">
//               <div>
//                 <span className="font-medium">{orderDetails.ticketName}</span>
//                 <p className="text-sm text-gray-600">Tourism Project Showcase 2025</p>
//               </div>
//               <span className="font-semibold">NPR {formatPrice(orderDetails.price)}</span>
//             </div>
//             <div className="border-t border-gray-200 my-4"></div>
//             {/* <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Subtotal</span>
//               <span>NPR {formatPrice(orderDetails.price)}</span>
//             </div> */}
//             {/* <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Tax (13%)</span>
//               <span>NPR {formatPrice(Math.round(orderDetails.price * 0.13))}</span>
//             </div> */}
//             {/* <div className="border-t border-gray-200 my-4"></div> */}
//             {/* <div className="flex justify-between">
//               <span className="font-semibold">Total</span>
//               <span className="font-bold text-lg">NPR {formatPrice(Math.round(orderDetails.price * 1.13))}</span>
//             </div> */}
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-gray-600 mb-6">
//             A confirmation email has been sent to <strong>{orderDetails.email}</strong>
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link to="/">
//               <Button variant="outline" size="large">
//                 Return to Home
//               </Button>
//             </Link>
//             <Button variant="primary" size="large" onClick={handleDownloadTicket} disabled={ticketDownloaded}>
//               {ticketDownloaded ? "Ticket Downloaded" : "Download Ticket"}
//             </Button>
//             {ticketDownloaded && (
//               <Button variant="secondary" size="large" onClick={handleSaveToDevice}>
//                 Save to Device
//               </Button>
//             )}
//           </div>
//         </div>
//       </Card>

//       {showTicket && (
//         <div className="mt-8">
//           <div id="ticket-template" className="mb-4">
//             <TicketTemplate orderDetails={orderDetails} userName={userName} ticketType={orderDetails.ticketType} />
//           </div>

//           <div className="text-center text-gray-500 text-sm">
//             <p>Your ticket has been generated. You can download it or save it to your device.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CheckoutSuccess

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import TicketTemplate from "./TicketTemplate";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const CheckoutSuccess = ({ orderDetails }) => {
  const ticketRef = useRef(null);

  // Format date for display
  const formatDate = (dateString) => {
    try {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch {
      return "Invalid date";
    }
  };

  // Format price with commas
  const formatPrice = (price) => {
    try {
      return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
    } catch {
      return "0";
    }
  };

  // Safely get first name and last name
  const getFullName = () => {
    if (!orderDetails) return "Valued Customer";

    // Try to get from direct properties
    if (orderDetails.firstName && orderDetails.lastName) {
      return `${orderDetails.firstName} ${orderDetails.lastName}`;
    }

    // Try to get from formData
    if (orderDetails.formData) {
      if (orderDetails.formData.firstName && orderDetails.formData.lastName) {
        return `${orderDetails.formData.firstName} ${orderDetails.formData.lastName}`;
      }
      if (orderDetails.formData.fullName) {
        return orderDetails.formData.fullName;
      }
      if (orderDetails.formData.name) {
        return orderDetails.formData.name;
      }
    }

    // Fallback
    return "Valued Customer";
  };

  const fullName = getFullName();
  const firstName = fullName.split(" ")[0];

  // State for ticket download
  const [showTicket, setShowTicket] = useState(false);
  const [ticketDownloaded, setTicketDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowTicket(true);
  }, []);

  if (!orderDetails) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find your order details. Please check your email for confirmation or contact support.
          </p>
          <Link to="/">
            <Button variant="primary" size="large">
              Return to Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Get payment method display name
  const getPaymentMethodName = (method) => {
    const methods = {
      creditCard: "Credit Card",
      bankTransfer: "Bank Transfer",
      esewa: "eSewa",
      khalti: "Khalti",
    };
    return methods[method] || method;
  };

  // Handle ticket download as image
  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return;
    
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `ToPS_Ticket_${orderDetails.orderNumber || "ticket"}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTicketDownloaded(true);
    } catch (error) {
      console.error("Error downloading ticket:", error);
      alert("There was an error downloading your ticket. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle save to device as PDF
  const handleSaveToDevice = async () => {
    if (!ticketRef.current) return;

    setIsSaving(true);

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait", // Changed to portrait for better mobile viewing
        unit: "mm",
        format: [canvas.width * 0.264583, canvas.height * 0.264583], // Convert pixels to mm
      });

      pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save(`ToPS_Ticket_${orderDetails.orderNumber || "ticket"}.pdf`);
    } catch (error) {
      console.error("Error saving ticket:", error);
      alert("There was an error saving your ticket. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 shadow-lg">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You, {firstName}!</h2>
          <p className="text-lg text-gray-600">Your order has been confirmed</p>
        </div>

        {/* Order Details */}
        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-semibold">{orderDetails.orderNumber || "N/A"}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Order Date:</span>
            <span className="font-semibold">{formatDate(orderDetails.orderDate)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Name:</span>
            <span className="font-semibold">{fullName}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Email:</span>
            <span className="font-semibold">{orderDetails.email || "N/A"}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-semibold">
              {getPaymentMethodName(orderDetails.paymentMethod || "unknown")}
            </span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <div>
                <span className="font-medium">{orderDetails.ticketName || "Event Ticket"}</span>
                <p className="text-sm text-gray-600">Tourism Project Showcase 2025</p>
              </div>
              <span className="font-semibold">NPR {formatPrice(orderDetails.price)}</span>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to <strong>{orderDetails.email || "your email"}</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="outline" size="large">
                Return to Home
              </Button>
            </Link>
            <Button
              variant="primary"
              size="large"
              onClick={handleDownloadTicket}
              disabled={isDownloading || ticketDownloaded}
            >
              {isDownloading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : ticketDownloaded ? (
                "Ticket Downloaded"
              ) : (
                "Download Ticket"
              )}
            </Button>
            <Button variant="secondary" size="large" onClick={handleSaveToDevice} disabled={isSaving}>
              {isSaving ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                "Save as PDF"
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Ticket Preview */}
      {showTicket && (
        <div className="mt-8">
          <div ref={ticketRef} className="mb-4">
            <TicketTemplate
              orderDetails={orderDetails}
              userName={fullName}
              ticketType={orderDetails.ticketType}
            />
          </div>

          <div className="text-center text-gray-500 text-sm mt-4">
            <p>Your ticket has been generated. You can download it as an image or save it as a PDF.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSuccess;