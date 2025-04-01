import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="min-h-screen max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mt-8">CANDiY API 예제</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 px-4 items-center">
          {/* 건강검진 배너 */}
          <Link href="/nhis/checkup">
            <h3>국민건강보험</h3>
            <div className="flex items-center justify-center bg-white hover:bg-white text-red-600 py-20 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
              <b>건강검진결과</b>
            </div>
          </Link>

          {/* 진료 및 투약내역 배너 */}
          <Link href="/nhis/treatment-record">
            <h3>국민건강보험</h3>
            <div className="flex items-center justify-center bg-white hover:bg-white text-red-600 py-20 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
              <b>진료 및 투약정보</b>
            </div>
          </Link>

          {/* 진료기록 배너 */}
          <Link href="/hira/medical-record">
            <h3>건강보험심사평가원</h3>
            <div className="flex items-center justify-center bg-white hover:bg-white text-blue-900 py-20 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
              <b>내 진료 정보 열람</b>
            </div>
          </Link>

          {/* 처방내역 배너 */}
          <Link href="/hira/medication-overall">
            <h3>건강보험심사평가원</h3>
            <div className="flex items-center justify-center bg-white hover:bg-white text-blue-900 py-20 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
              <b>내가 먹는 약 한눈에</b>
            </div>
          </Link>
        </div>
      </div>
  );
}
