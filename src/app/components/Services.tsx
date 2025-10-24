// Services.tsx
'use client';

import React from 'react';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const GearWrenchIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke="round"></g><g id="SVGRepo_iconCarrier"><path d="M465.425064 456.68202c-3.982425-3.982425-10.499121-3.982425-14.481546 0l-286.010551 286.010551c-3.982425 3.982425-3.982425 10.499121 0 14.481547l97.750441 97.750441c3.982425 3.982425 10.499121 3.982425 14.481547 0L563.175506 568.914008c3.982425-3.982425 3.982425-10.499121 0-14.481546L465.425064 456.68202z m10.861161-10.86116l97.750441 97.750441c10.137083 10.137083 10.137083 26.066784 0 36.203868l-286.010551 286.01055c-10.137083 10.137083-26.066784 10.137083-36.203867 0L154.071806 768.035278c-10.137083-10.137083-10.137083-26.066784 0-36.203867L440.082357 445.82086c10.137083-10.137083 26.066784-10.137083 36.203868 0z" fill=""></path><path d="M302.807778 741.190027a25.6 25.6 0 1 0-51.2 0.000894 25.6 25.6 0 1 0 51.2-0.000894Z" fill="#0070c0"></path><path d="M882.131576 294.850734l-121.282955 121.282955-10.86116-10.86116c-70.235502-72.407734-123.455187-126.351497-159.297016-162.193325-17.739895-17.739895-31.135326-31.135326-40.186293-39.462216l-2.53427-2.53427C482.802921 276.386762 485.337191 389.704866 555.934732 460.302407c73.855889 73.855889 194.776806 73.131812 269.718811-1.810193 51.047453-51.047453 69.873464-105.353254 56.478033-163.64148z m-120.920917 99.198596L889.734388 265.525601C916.52525 339.38149 898.785355 407.082722 836.514703 469.353374 755.418041 550.450036 625.084119 551.174114 545.073572 471.163567S465.787103 260.819099 546.883766 179.722436c1.810193-1.810193 69.511425 65.891038 203.465733 203.465734l10.86116 10.86116z" fill=""></path><path d="M686.268654 279.283071L608.43034 201.444756l5.068541-6.516696c3.620387-5.068541 8.688928-10.86116 14.119508-16.29174C673.235262 133.019447 744.194842 127.226829 788.725598 165.240889L795.242295 170.309431 686.268654 279.283071z m-57.564149-79.286469L686.268654 257.560751 772.07180 171.757585c-38.738138-27.1529-95.940248-19.912127-133.59227 17.739895-3.258348 3.258348-6.878735 6.878735-9.775045 10.499122zM260.873215 758.984311c9.050967 9.050967 23.532514 9.050967 32.58348 0s9.050967-23.532514 0-32.58348-23.532514-9.050967-32.58348 0-9.050967 23.532514 0 32.58348z m-10.86116 10.86116c-14.843586-14.843586-14.843586-39.462215 0-54.3058s39.462215-14.843586 54.3058 0 14.843586 39.462215 0 54.3058-39.462215 14.843586-54.3058 0zM552.314346 355.311192l104.991215 104.991215L697.129814 420.478153 592.1386 315.486938l-39.824254 39.824254z m47.065027-54.305801l112.231988 112.231989c3.982425 3.982425 3.982425 10.499121 0 14.481546l-47.065027 47.065028c-3.982425 3.982425-10.499121 3.982425-14.481547 0L537.832799 362.551965c-3.982425-3.982425-3.982425-10.499121 0-14.481546L584.897826 301.005391c3.982425-3.982425 10.499121-3.982425 14.481547 0z" fill=""></path><path d="M624.72208 348.070419l-32.58348 32.58348c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.86116-10.86116c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221441-32.221442 25.704746 24.980669zM657.305561 380.653899l-32.583481 32.583481c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.86116-10.861161c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221442-32.221441 25.704746 24.980668zM689.889041 413.23738l-32.58348 32.58348c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.861161-10.86116c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221442-32.221442 25.704746 24.980669z" fill="#0070c0"></path></g></svg>
);

const CompassDraftIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 919.04c-224.768 0-407.04-182.272-407.04-407.04S287.232 104.96 512 104.96s407.04 182.272 407.04 407.04-182.272 407.04-407.04 407.04z m0-15.36c216.064 0 391.68-175.616 391.68-391.68S728.064 120.32 512 120.32 120.32 295.936 120.32 512s175.616 391.68 391.68 391.68z" fill=""></path><path d="M512 837.12c-179.712 0-325.12-145.408-325.12-325.12S332.288 186.88 512 186.88s325.12 145.408 325.12 325.12-145.408 325.12-325.12 325.12z m0-15.36c171.008 0 309.76-138.752 309.76-309.76S683.008 202.24 512 202.24 202.24 340.992 202.24 512s138.752 309.76 309.76 309.76z" fill=""></path><path d="M501.76 245.76h20.48c5.632 0 10.24 4.608 10.24 10.24v81.92c0 5.632-4.608 10.24-10.24 10.24h-20.48c-5.632 0-10.24-4.608-10.24-10.24V256c0-5.632 4.608-10.24 10.24-10.24zM714.24 328.192c3.072 3.072 3.072 7.68 0 10.752l-32.768 32.768c-3.072 3.072-7.68 3.072-10.752 0-3.072-3.072-3.072-7.68 0-10.752l32.768-32.768c3.072-3.072 8.192-3.072 10.752 0zM366.08 655.872c3.072 3.072 3.072 7.68 0 10.752l-32.768 32.768c-3.072 3.072-7.68 3.072-10.752 0-3.072-3.072-3.072-7.68 0-10.752l32.768-32.768c3.072-3.072 8.192-3.072 10.752 0zM650.752 655.872c3.072-3.072 7.68-3.072 10.752 0l32.768 32.768c3.072 3.072 3.072 7.68 0 10.752-3.072 3.072-7.68 3.072-10.752 0l-32.768-32.768c-3.072-3.072-3.072-8.192 0-10.752zM353.28 501.76v20.48c0 5.632-4.608 10.24-10.24 10.24H261.12c-5.632 0-10.24-4.608-10.24-10.24v-20.48c0-5.632 4.608-10.24 10.24-10.24h81.92c5.632 0 10.24 4.608 10.24 10.24zM501.76 675.84h20.48c5.632 0 10.24 4.608 10.24 10.24v81.92c0 5.632-4.608 10.24-10.24 10.24h-20.48c-5.632 0-10.24-4.608-10.24-10.24v-81.92c0-5.632 4.608-10.24 10.24-10.24zM773.12 501.76v20.48c0 5.632-4.608 10.24-10.24 10.24h-81.92c-5.632 0-10.24-4.608-10.24-10.24v-20.48c0-5.632 4.608-10.24 10.24-10.24h81.92c5.632 0 10.24 4.608 10.24 10.24zM515.584 473.088h0.512L395.264 317.952c-3.072-4.608-9.728-5.12-14.336-1.536l-24.064 18.944c-4.608 3.584-5.12 9.728-1.536 14.336l120.32 154.624c4.096-17.92 20.48-31.232 39.936-31.232z" fill="#0070bf"></path><path d="M519.68 463.872L401.408 312.32c-3.072-3.584-7.168-6.144-11.776-6.656-5.12-0.512-9.728 0.512-13.824 3.584l-24.064 18.944c-8.192 6.144-9.216 16.896-3.072 25.088l115.712 148.992c-0.512 3.072-1.024 6.656-1.024 9.728 0 26.624 22.016 48.64 48.64 48.64s48.64-22.016 48.64-48.64c0-24.064-17.408-44.544-40.96-48.128z m-158.72-119.808c-0.512-0.512-1.536-2.048 0-3.584l24.064-18.944c1.024-0.512 1.536-0.512 2.048-0.512 1.024 0 1.024 0 1.536 0.512l111.616 143.36c-11.776 3.072-22.016 10.752-28.672 20.48L360.96 344.064z m151.04 201.216c-14.336 0-26.624-9.216-31.232-22.016-1.024-3.584-2.048-7.168-2.048-11.264 0-4.608 1.024-9.216 2.56-13.312 5.12-11.264 15.872-19.456 29.184-19.968h1.024c13.824 0 25.6 8.192 30.72 19.968 1.536 4.096 2.56 8.704 2.56 13.312 0.512 18.432-14.336 33.28-32.768 33.28z" fill=""></path></g></svg>
);

const CraneHookIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M138.24 435.2h51.2c5.632 0 10.24 4.608 10.24 10.24v179.2c0 5.632-4.608 10.24-10.24 10.24H138.24c-5.632 0-10.24-4.608-10.24-10.24V445.44c0-5.632 4.608-10.24 10.24-10.24z" fill="#0070bf"></path><path d="M189.44 642.56H138.24c-9.728 0-17.92-8.192-17.92-17.92V445.44c0-9.728 8.192-17.92 17.92-17.92h51.2c9.728 0 17.92 8.192 17.92 17.92v179.2c0 9.728-8.192 17.92-17.92 17.92z m-51.2-199.68c-1.536 0-2.56 1.024-2.56 2.56v179.2c0 1.536 1.024 2.56 2.56 2.56h51.2c1.536 0 2.56-1.024 2.56-2.56V445.44c0-1.536-1.024-2.56-2.56-2.56H138.24z" fill=""></path><path d="M296.96 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM665.6 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM358.4 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM727.04 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM419.84 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM788.48 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM481.28 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM849.92 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM542.72 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM906.24 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM604.16 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72z" fill="#0070bf"></path><path d="M924.16 153.6h-762.88c-18.432 0-33.28 14.848-33.28 33.28V194.56h-25.6c-14.336 0-25.6 11.264-25.6 25.6v633.344c0 14.336 11.264 25.6 25.6 25.6h122.88c14.336 0 25.6-11.264 25.6-25.6V327.68h673.28c18.432 0 33.28-14.848 33.28-33.28v-107.52c0-18.432-14.848-33.28-33.28-33.28zM235.52 853.504c0 5.632-4.608 10.24-10.24 10.24H102.4c-5.632 0-10.24-4.608-10.24-10.24V220.16c0-5.632 4.608-10.24 10.24-10.24h57.344c3.584 0 6.656 2.048 8.704 5.12l65.536 106.496c1.024 1.536 1.536 3.584 1.536 5.12v526.848zM942.08 294.4c0 9.728-8.192 17.92-17.92 17.92l-677.888-0.512-64.512-104.96c-4.608-7.68-12.8-12.288-22.016-12.288H143.36v-7.68c0-9.728 8.192-17.92 17.92-17.92h762.88c9.728 0 17.92 8.192 17.92 17.92v107.52z" fill=""></path></g></svg>
);

const CalendarCheckIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M363.52 148.48v-24.576c0-3.584 4.608-6.144 10.24-6.144h40.96c5.632 0 10.24 2.56 10.24 6.144V148.48H363.52zM481.28 148.48v-24.576c0-3.584 4.608-6.144 10.24-6.144h40.96c5.632 0 10.24 2.56 10.24 6.144V148.48H481.28z" fill="#0070bf"></path><path d="M885.248 445.44l-14.848-0.512c-16.896-81.408-71.68-138.24-133.12-138.24-54.784 0-104.448 44.544-126.464 113.664l-1.024 2.56-2.56 1.536c-4.096 2.56-8.704 4.096-13.312 4.096H317.44c-14.336 0-25.6-11.264-25.6-25.6v-25.088H240.64v25.088c0 14.336-11.264 25.6-25.6 25.6h-40.96c-14.336 0-25.6-11.264-25.6-25.6V168.96c0-14.336 11.264-25.6 25.6-25.6h40.96c14.336 0 25.6 11.264 25.6 25.6v25.088h51.2V168.96c0-14.336 11.264-25.6 25.6-25.6h276.48c14.336 0 25.6 11.264 25.6 25.6v5.12h43.52C788.48 174.08 890.88 275.456 890.88 400.384c0 16.896-2.048 31.744-5.632 45.056zM225.28 361.984h81.92v40.448c0 5.632 4.608 10.24 10.24 10.24h276.48c1.024 0 2.048 0 3.072-0.512 24.576-73.728 79.36-121.344 140.288-121.344 59.392 0 112.64 46.08 138.24 115.712v-6.144c0-116.224-95.232-210.944-212.48-210.944H604.16v-20.48c0-5.632-4.608-10.24-10.24-10.24H317.44c-5.632 0-10.24 4.608-10.24 10.24v40.448H225.28V168.96c0-5.632-4.608-10.24-10.24-10.24h-40.96c-5.632 0-10.24 4.608-10.24 10.24v233.472c0 5.632 4.608 10.24 10.24 10.24h40.96c5.632 0 10.24-4.608 10.24-10.24v-40.448z" fill=""></path><path d="M384 460.8h143.36c3.072 0 5.12 2.048 5.12 5.12v133.12c0 3.072-2.048 5.12-5.12 5.12H384c-3.072 0-5.12-2.048-5.12-5.12V465.92c0-3.072 2.048-5.12 5.12-5.12z" fill="#0070bf"></path><path d="M386.56 596.48h138.24v-128h-138.24v128z m-2.56-143.36h143.36c7.168 0 12.8 5.632 12.8 12.8v133.12c0 7.168-5.632 12.8-12.8 12.8H384c-7.168 0-12.8-5.632-12.8-12.8V465.92c0-7.168 5.632-12.8 12.8-12.8zM353.28 906.24h204.8v-256H353.28v256z m-5.12-271.36h215.04c5.632 0 10.24 4.608 10.24 10.24v266.24c0 5.632-4.608 10.24-10.24 10.24H348.16c-5.632 0-10.24-4.608-10.24-10.24v-266.24c0-5.632 4.608-10.24 10.24-10.24z" fill=""></path></g></svg>
);

const WrenchHammerIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M215.04 143.36v-40.96c0-5.632 4.608-10.24 10.24-10.24h40.96c5.632 0 10.24 4.608 10.24 10.24v40.96H215.04zM399.36 143.36v-40.96c0-5.632 4.608-10.24 10.24-10.24h40.96c5.632 0 10.24 4.608 10.24 10.24v40.96H399.36z" fill="#0070bf"></path><path d="M168.96 158.72v182.784c0 48.128 38.912 87.04 87.04 87.04h153.6c48.128 0 87.04-38.912 87.04-87.04V159.232L168.96 158.72z m343.04-14.848v197.632c0 56.32-46.08 102.4-102.4 102.4H256c-56.32 0-102.4-46.08-102.4-102.4V143.36l358.4 0.512z" fill=""></path><path d="M284.16 460.8h76.8c11.264 0 20.48 9.216 20.48 20.48v2.56l-5.632 51.2c-1.024 10.24-9.728 17.92-20.48 17.92H290.304c-10.24 0-18.944-7.68-20.48-17.92l-6.144-51.2c-1.536-11.264 6.656-21.504 17.92-23.04h2.56z" fill="#0070bf"></path><path d="M284.16 476.16h-0.512c-2.56 0.512-4.608 3.072-4.608 5.632l6.144 51.2c0.512 2.56 2.56 4.608 5.12 4.608h64.512c2.56 0 4.608-2.048 5.12-4.608l5.632-51.2V481.28c0-3.072-2.048-5.12-5.12-5.12H284.16z m0-15.36h76.8c11.264 0 20.48 9.216 20.48 20.48v2.56l-5.632 51.2c-1.024 10.24-9.728 17.92-20.48 17.92H290.304c-10.24 0-18.944-7.68-20.48-17.92l-6.144-51.2c-1.536-11.264 6.656-21.504 17.92-23.04h2.56zM307.2 591.872v156.672c0 77.824 62.976 140.8 140.8 140.8H460.8c77.824 0 140.8-62.976 140.8-140.8v-156.672H568.32V747.52c0 62.976-51.2 113.664-113.664 113.664s-113.664-51.2-113.664-113.664v-155.648H307.2z m48.64-15.36V747.52c0 54.272 44.032 98.304 98.304 98.304s98.304-44.032 98.304-98.304v-171.008h64v172.032c0 86.016-70.144 156.16-156.16 156.16h-12.8c-86.016 0-156.16-70.144-156.16-156.16v-172.032h64.512z" fill=""></path><path d="M862.208 732.16v-162.816c0-74.24-60.416-134.656-134.656-134.656h-24.576c-74.24 0-134.656 60.416-134.656 134.656V732.16h33.28v-155.648c0-62.976 51.2-113.664 113.664-113.664s113.664 51.2 113.664 113.664V732.16h33.28z m-48.64 15.36v-171.008c0-54.272-44.032-98.304-98.304-98.304s-98.304 44.032-98.304 98.304V747.52H552.96v-178.176c0-82.944 67.072-150.016 150.016-150.016h24.576c82.944 0 150.016 67.072 150.016 150.016V747.52h-64z" fill=""></path></g></svg>
);

const BoxCogIcon = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M389.12 675.84h235.52v40.96H389.12z" fill="#0070bf"></path><path d="M403.968 634.88h216.576l23.552-62.976 4.608-2.56c76.8-43.52 123.904-120.832 123.904-205.312 0-133.12-116.736-241.152-261.12-241.152S250.88 230.912 250.88 364.032c0 84.48 47.616 161.792 124.416 205.312l4.608 2.56 24.064 62.976zM235.52 364.032C235.52 222.208 359.424 107.52 512 107.52s276.48 114.688 276.48 256.512c0 92.672-52.736 173.568-132.096 218.624l-25.088 67.584H393.728l-26.112-67.584C288.256 537.6 235.52 456.704 235.52 364.032zM619.52 762.88H404.48v112.64c0 5.632 4.608 10.24 10.24 10.24h194.56c5.632 0 10.24-4.608 10.24-10.24v-112.64z m15.36-15.36v128c0 14.336-11.264 25.6-25.6 25.6H414.72c-14.336 0-25.6-11.264-25.6-25.6v-128h245.76zM401.92 714.24h220.16v-25.6h-220.16v25.6z m235.52-40.96v56.32h-250.88v-56.32h250.88z" fill=""></path><path d="M557.568 318.464c-14.848-2.56-29.184 0-41.984 5.632-11.776-5.632-26.112-7.68-41.472-5.632-36.864 5.632-56.832 33.792-59.392 78.848V634.88h30.72V398.848c2.048-31.744 12.8-47.104 33.792-50.176 2.048-0.512 4.096-0.512 6.656-0.512-9.728 13.312-15.36 30.208-15.872 49.664-1.024 46.592 19.456 77.312 47.104 77.312 25.6 0 44.032-37.888 43.008-77.312-0.512-18.432-6.144-35.84-15.872-49.664 3.072 0 5.632 0 8.704 0.512 22.016 3.584 32.768 17.92 32.768 49.664V634.88h30.72V398.336c0-45.568-19.968-73.728-58.88-79.872z m-28.16 80.384c0.512 13.824-2.048 26.624-7.168 36.352-2.048 4.096-4.096 7.168-5.632 8.704l-0.512 0.512c-2.048-0.512-4.608-2.56-7.168-6.656-5.12-8.192-8.704-20.992-8.192-39.424 0.512-15.872 5.632-28.672 14.336-37.376 8.704 9.216 13.824 22.528 14.336 37.888z" fill="#0070bf"></path></g></svg>
);

function Services() {
  const [openId, setOpenId] = React.useState<number | null>(1);

  const services: Service[] = [
    {
      id: 1,
      title: 'Operation & Maintenance',
      description:
        'Power plant (Thermal, Solar, Biomass, Multi Fuel), Process Boiler, Distilleries, Steam Turbine, Gas Turbine, Hydro Turbine, Chiller Plant, Nitrogen Plant, Hydrogen Plant, Ammonia Plant, Compressors, Cooling Tower, Edible Refinery, Paper Plant, Chemical Plant, Milk Processing, Food Processing, Textile, Steel Rolling Mill, SMS, DRI, Cement Plant, and all types of Water Treatment Plants.',
      icon: <GearWrenchIcon />,
    },
    {
      id: 2,
      title: 'Engineering & Consultancy',
      description:
        'Powered by experienced engineers, we provide consulting for Boiler & Turbine O&M, planning and execution of industrial projects: Turbine/Boiler/ESP/CHP/RO+DM plant/Chimney/BOP and allied utilities (from feasibility to commissioning).',
      icon: <CompassDraftIcon />,
    },
    {
      id: 3,
      title: 'Project Services',
      description:
        'Turnkey/EPC; erection of Steam Turbine, Boiler, ESP, Rotary Air Pre-heater, HRSG, Coal Handling, Process Conveyors, Ash Handling (pneumatic), Silos, MS Structures, Piping, Cooling Towers, Utilities and Industrial Equipment.',
      icon: <CraneHookIcon />,
    },
    {
      id: 4,
      title: 'Annual Maintenance',
      description:
        'Planned maintenance for Power Plants, Boilers, ESP, Steam Turbines, Cooling Towers, Edible Refinery, Paper & Chemical Plants, Milk/Food Processing, Textile, Steel Rolling, SMS, DRI, Cement, DM/RO, STP, ETP, PT, etc.',
      icon: <CalendarCheckIcon />,
    },
    {
      id: 5,
      title: 'Breakdown & Overhauling',
      description:
        'Steam Turbines, Boiler auxiliaries (ID/FD/PA fans), feed pumps, centrifugal pumps, fuel handling systems; corrective and breakdown services for AFBC boilers, ESPs, and assorted industrial machinery.',
      icon: <WrenchHammerIcon />,
    },
    {
      id: 6,
      title: 'Spares',
      description:
        'For Triveni, Siemens, Maxwatt, Belliss, HTC, BHEL, Kessels, etc. Non-IBR spares for AFBC/Travelling Grate/CFBC: thermowells, RTDs, pressure switches/gauges, level switches, manometers, ESP insulators, air/coal nozzles, rotary airlock valves, coal feeders, and coal crushing plant spares.',
      icon: <BoxCogIcon />,
    },
  ];

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <section id="services" aria-labelledby="services-heading">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Services</span>
            <h2 id="services-heading" className="cs-title">
              Services We Provide
            </h2>
            <p className="cs-text">
              Comprehensive industrial solutions backed by deep expertise in power plant maintenance, engineering consultancy, and end-to-end project delivery.
            </p>
          </div>

          {/* Desktop / Tablet – Cards */}
          <div className="cs-services-grid-desktop" role="list">
            {services.map((service, index) => (
              <article key={service.id} className="cs-service-card" role="listitem" tabIndex={0}>
                <div className="cs-card-header">
                  <div className="cs-card-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <div className="cs-card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="cs-card-title">{service.title}</h3>
                <p className="cs-card-description">{service.description}</p>
                <div className="cs-card-hover">
                  <span className="cs-learn-more">Learn More</span>
                  <span className="cs-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile – Accordion */}
          <div className="cs-services-accordion-mobile">
            {services.map((service, index) => {
              const isOpen = openId === service.id;
              return (
                <div key={service.id} className={`cs-accordion-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="cs-accordion-header"
                    aria-expanded={isOpen}
                    aria-controls={`section-${service.id}`}
                    id={`accordion-${service.id}`}
                    onClick={() => toggle(service.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggle(service.id);
                      }
                    }}
                  >
                    <div className="cs-accordion-left">
                      <div className="cs-accordion-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="cs-accordion-icon" aria-hidden="true">
                        {service.icon}
                      </div>
                      <h3 className="cs-accordion-title">{service.title}</h3>
                    </div>
                    <span className="cs-accordion-arrow" aria-hidden="true">
                      {isOpen ? '↑' : '↓'}
                    </span>
                  </button>
                  <div
                    id={`section-${service.id}`}
                    role="region"
                    aria-labelledby={`accordion-${service.id}`}
                    className="cs-accordion-content"
                    style={{ maxHeight: isOpen ? '400px' : '0px' }}
                  >
                    <p className="cs-accordion-description">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Section */
        #services {
          --primary: #0070c0;
          --secondary: #005a9e;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --headerFontSize: clamp(1.75rem, 3vw, 2.5rem);
          --bodyFontSize: 1.05rem;

          padding: clamp(3.5rem, 6vw, 7rem) 1rem;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        #services .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }

        #services .cs-content {
          text-align: center;
          width: 100%;
          max-width: 48rem;
          margin: 0 auto 3rem;
        }

        #services .cs-topper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.8rem;
        }

        #services .cs-topper:before {
          content: '';
          width: 28px;
          height: 2px;
          background: currentColor;
          opacity: 0.8;
        }

        #services .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        #services .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.75;
          margin: 0;
          color: var(--bodyTextColor);
          opacity: 0.9;
        }

        /* Desktop Grid */
        #services .cs-services-grid-desktop {
          display: none;
        }

        #services .cs-service-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          padding: clamp(1.5rem, 2vw, 2rem);
          position: relative;
          overflow: hidden;
          transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          outline: none;
        }

        #services .cs-service-card:focus-visible {
          box-shadow: 0 0 0 3px rgba(0, 112, 192, 0.3);
        }

        #services .cs-service-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.1);
        }

        #services .cs-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        #services .cs-card-icon {
          width: 4rem;
          height: 4rem;
          display: grid;
          place-items: center;
          background: rgba(0, 112, 192, 0.1);
          color: var(--primary);
          transition: transform 250ms ease, background 250ms ease;
        }

        #services .cs-card-icon svg {
          width: 2.1rem;
          height: 2.1rem;
        }

        #services .cs-service-card:hover .cs-card-icon {
          transform: scale(1.05);
          background: rgba(0, 112, 192, 0.15);
        }

        #services .cs-card-number {
          font-size: 2.75rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
          color: rgba(148, 163, 184, 0.25);
          transition: color 250ms ease;
        }

        #services .cs-service-card:hover .cs-card-number {
          color: rgba(0, 112, 192, 0.4);
        }

        #services .cs-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.25rem 0 0.25rem;
          color: var(--headerColor);
        }

        #services .cs-card-description {
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          color: var(--bodyTextColor);
          opacity: 0.95;
        }

        #services .cs-card-hover {
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--primary);
          transform: translateY(4px);
          opacity: 0;
          transition: all 220ms ease;
        }

        #services .cs-service-card:hover .cs-card-hover {
          transform: translateY(0);
          opacity: 1;
        }

        #services .cs-arrow {
          display: inline-block;
          transition: transform 220ms ease;
        }
        #services .cs-service-card:hover .cs-arrow {
          transform: translateX(4px);
        }

        /* Accordion (Mobile) */
        #services .cs-services-accordion-mobile {
          display: block;
          margin-top: 1rem;
        }

        #services .cs-accordion-item {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          margin-bottom: 0.9rem;
          overflow: hidden;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }

        #services .cs-accordion-item.active {
          border-color: var(--primary);
          box-shadow: 0 5px 15px rgba(0, 112, 192, 0.1);
        }

        #services .cs-accordion-header {
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1rem 1.2rem 1rem;
          background: transparent;
          color: inherit;
          border: 0;
          cursor: pointer;
          transition: background-color 200ms ease;
        }

        #services .cs-accordion-header:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 112, 192, 0.3);
        }

        #services .cs-accordion-header:hover {
          background-color: rgba(0, 112, 192, 0.05);
        }

        #services .cs-accordion-left {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex: 1;
          min-width: 0;
        }

        #services .cs-accordion-number {
          font-size: 1rem;
          font-weight: 800;
          color: var(--primary);
          min-width: 2ch;
        }

        #services .cs-accordion-icon {
          width: 2.5rem;
          height: 2.5rem;
          display: grid;
          place-items: center;
          background: rgba(0, 112, 192, 0.1);
          color: var(--primary);
          flex-shrink: 0;
        }

        #services .cs-accordion-icon svg {
          width: 1.3rem;
          height: 1.3rem;
        }

        #services .cs-accordion-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0;
          color: var(--headerColor);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        #services .cs-accordion-arrow {
          font-size: 1.1rem;
          transition: transform 200ms ease;
          color: var(--primary);
        }

        #services .cs-accordion-item.active .cs-accordion-arrow {
          transform: rotate(180deg);
        }

        #services .cs-accordion-content {
          overflow: hidden;
          transition: max-height 280ms ease;
          background: #ffffff;
        }

        #services .cs-accordion-description {
          padding: 0.75rem 1rem 1.25rem;
          margin: 0;
          font-size: 0.975rem;
          line-height: 1.75;
          color: var(--bodyTextColor);
        }

        /* Tablet */
        @media (min-width: 48rem) {
          #services .cs-services-accordion-mobile {
            display: none;
          }
          #services .cs-services-grid-desktop {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-top: 2rem;
          }
          #services .cs-content {
            margin-bottom: 2.25rem;
          }
        }

        /* Desktop */
        @media (min-width: 64rem) {
          #services .cs-services-grid-desktop {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
          #services .cs-service-card {
            padding: 2rem;
          }
        }

        /* Large Desktop - 3 cards per row */
        @media (min-width: 75rem) {
          #services .cs-services-grid-desktop {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.75rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          #services .cs-service-card,
          #services .cs-card-icon,
          #services .cs-card-hover,
          #services .cs-accordion-content,
          #services .cs-accordion-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Services;