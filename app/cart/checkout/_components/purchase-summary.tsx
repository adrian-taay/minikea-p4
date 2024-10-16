"use client";

import { useUserStore } from "@/lib/useUserStore";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
export default function PurchaseSummary() {
  const cart = useUserStore((state) => state.cart);
  const shippingFee = Number(0);
  const subtotal = cart.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const totalCost = subtotal + shippingFee;

  return (
    <div className="w-full space-y-8">
      <h1 className="text-center text-xl font-semibold">Purchase Summary</h1>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th isNumeric>Qty</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item, index) => (
              <Tr key={index}>
                <Td>{item.title}</Td>
                <Td isNumeric>{item.quantity}</Td>
                <Td isNumeric>$ {(item.price * item.quantity).toFixed(2)}</Td>
              </Tr>
            ))}
            <Tr>
              <Td>Shipping</Td>
              <Td isNumeric>Free</Td>
              <Td isNumeric>$ 0.00</Td>
            </Tr>
          </Tbody>
          <Tfoot className="place-self-end">
            <Th>Total</Th>
            <Th>&nbsp;</Th>
            <Th fontSize={18} isNumeric>
              $ {totalCost.toFixed(2)}
            </Th>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
