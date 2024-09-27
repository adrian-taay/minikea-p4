"use client";

import TransactionItemsCard from "@/components/cards/transaction-item-card";
import { useUserStore } from "@/lib/useUserStore";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import React from "react";

export default function TransactionsPage() {
  const user = useUserStore((state) => state.user);
  const transactions = useUserStore((state) => state.transactions);

  const transactionsByUser = transactions.filter(
    (transaction) => transaction.user?.username === user.username
  );

  const TransactionsWrapper = transactionsByUser.map((transactions) => {
    const transactionDate = formatDate(transactions.createdAt);

    return (
      <main key={transactions.id} className="border rounded-md">
        <div className="flex-between bg-neutral-200 px-4 py-2">
          <div className="font-semibold text-md tracking-wide">
            {transactionDate}
          </div>
          <p
            className={clsx(
              transactions.status === "Completed"
                ? "text-lime-600"
                : "text-red-600",
              "uppercase"
            )}
          >
            {transactions.status}
          </p>
        </div>
        {transactions.items.map((item) => (
          <TransactionItemsCard key={item.sku} item={item} />
        ))}
        <div className="text-right font-semibold px-4 py-2">
          Total: ${transactions.totalAmount.toFixed(2)}
        </div>
      </main>
    );
  });

  const NoTransactions = <span>No previous transactions.</span>;

  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Transactions</h1>
      <div className="flex flex-col gap-8">
        {transactionsByUser.length === 0 ? NoTransactions : TransactionsWrapper}
      </div>
    </div>
  );
}
