"use client";

import TransactionItemsCard from "@/components/cards/transaction-item-card";
import { useUserStore } from "@/lib/useUserStore";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import React from "react";

export default function TransactionsPage() {
  const user = useUserStore(state => state.user);
  const transactions = useUserStore(state => state.transactions);

  const transactionsByUser = transactions.filter(
    transaction => transaction.user?.username === user.username
  );

  const TransactionsWrapper = transactionsByUser.map(transactions => {
    const transactionDate = formatDate(transactions.createdAt);

    return (
      <div
        key={transactions.id}
        className="w-full border rounded-md">
        <div className="flex-between bg-slate-100 px-4 py-2">
          <div className="text-md tracking-wide">{transactionDate}</div>
          <p
            className={clsx(
              transactions.status === "Completed"
                ? "text-lime-600"
                : "text-red-600",
              "uppercase"
            )}>
            {transactions.status}
          </p>
        </div>
        {transactions.items.map(item => (
          <TransactionItemsCard
            key={item.sku}
            item={item}
          />
        ))}
        <div className="text-right font-semibold px-4 py-2">
          Total: ${transactions.totalAmount.toFixed(2)}
        </div>
      </div>
    );
  });

  const NoTransactions = <span>No previous transactions.</span>;

  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl mb-4 sm:mb-8">Transactions</h1>
      <div className="w-full flex flex-col-reverse gap-4 md:gap-8">
        {transactionsByUser.length === 0 ? NoTransactions : TransactionsWrapper}
      </div>
    </div>
  );
}
