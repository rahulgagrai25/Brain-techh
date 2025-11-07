'use client';
import React from 'react';

function ServicesPage() {

  const GearWrenchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M465.425064 456.68202c-3.982425-3.982425-10.499121-3.982425-14.481546 0l-286.010551 286.010551c-3.982425 3.982425-3.982425 10.499121 0 14.481547l97.750441 97.750441c3.982425 3.982425 10.499121 3.982425 14.481547 0L563.175506 568.914008c3.982425-3.982425 3.982425-10.499121 0-14.481546L465.425064 456.68202z m10.861161-10.86116l97.750441 97.750441c10.137083 10.137083 10.137083 26.066784 0 36.203868l-286.010551 286.01055c-10.137083 10.137083-26.066784 10.137083-36.203867 0L154.071806 768.035278c-10.137083-10.137083-10.137083-26.066784 0-36.203867L440.082357 445.82086c10.137083-10.137083 26.066784-10.137083 36.203868 0z"></path>
      <path d="M302.807778 741.190027a25.6 25.6 0 1 0-51.2 0.000894 25.6 25.6 0 1 0 51.2-0.000894Z" fill="#0070c0"></path>
      <path d="M882.131576 294.850734l-121.282955 121.282955-10.86116-10.86116c-70.235502-72.407734-123.455187-126.351497-159.297016-162.193325-17.739895-17.739895-31.135326-31.135326-40.186293-39.462216l-2.53427-2.53427C482.802921 276.386762 485.337191 389.704866 555.934732 460.302407c73.855889 73.855889 194.776806 73.131812 269.718811-1.810193 51.047453-51.047453 69.873464-105.353254 56.478033-163.64148z m-120.920917 99.198596L889.734388 265.525601C916.52525 339.38149 898.785355 407.082722 836.514703 469.353374 755.418041 550.450036 625.084119 551.174114 545.073572 471.163567S465.787103 260.819099 546.883766 179.722436c1.810193-1.810193 69.511425 65.891038 203.465733 203.465734l10.86116 10.86116z"></path>
      <path d="M686.268654 279.283071L608.43034 201.444756l5.068541-6.516696c3.620387-5.068541 8.688928-10.86116 14.119508-16.29174C673.235262 133.019447 744.194842 127.226829 788.725598 165.240889L795.242295 170.309431 686.268654 279.283071z m-57.564149-79.286469L686.268654 257.560751 772.07180 171.757585c-38.738138-27.1529-95.940248-19.912127-133.59227 17.739895-3.258348 3.258348-6.878735 6.878735-9.775045 10.499122zM260.873215 758.984311c9.050967 9.050967 23.532514 9.050967 32.58348 0s9.050967-23.532514 0-32.58348-23.532514-9.050967-32.58348 0-9.050967 23.532514 0 32.58348z m-10.86116 10.86116c-14.843586-14.843586-14.843586-39.462215 0-54.3058s39.462215-14.843586 54.3058 0 14.843586 39.462215 0 54.3058-39.462215 14.843586-54.3058 0zM552.314346 355.311192l104.991215 104.991215L697.129814 420.478153 592.1386 315.486938l-39.824254 39.824254z m47.065027-54.305801l112.231988 112.231989c3.982425 3.982425 3.982425 10.499121 0 14.481546l-47.065027 47.065028c-3.982425 3.982425-10.499121 3.982425-14.481547 0L537.832799 362.551965c-3.982425-3.982425-3.982425-10.499121 0-14.481546L584.897826 301.005391c3.982425-3.982425 10.499121-3.982425 14.481547 0z"></path>
      <path d="M624.72208 348.070419l-32.58348 32.58348c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.86116-10.86116c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221441-32.221442 25.704746 24.980669zM657.305561 380.653899l-32.583481 32.583481c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.86116-10.861161c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221442-32.221441 25.704746 24.980668zM689.889041 413.23738l-32.58348 32.58348c-3.982425 3.982425-10.499121 3.982425-14.481547 0l-10.861161-10.86116c-3.982425-3.982425-3.982425-10.499121 0-14.481547l32.221442-32.221442 25.704746 24.980669z" fill="#0070c0"></path>
    </svg>
  );

  const CompassDraftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M512 919.04c-224.768 0-407.04-182.272-407.04-407.04S287.232 104.96 512 104.96s407.04 182.272 407.04 407.04-182.272 407.04-407.04 407.04z m0-15.36c216.064 0 391.68-175.616 391.68-391.68S728.064 120.32 512 120.32 120.32 295.936 120.32 512s175.616 391.68 391.68 391.68z"></path>
      <path d="M512 837.12c-179.712 0-325.12-145.408-325.12-325.12S332.288 186.88 512 186.88s325.12 145.408 325.12 325.12-145.408 325.12-325.12 325.12z m0-15.36c171.008 0 309.76-138.752 309.76-309.76S683.008 202.24 512 202.24 202.24 340.992 202.24 512s138.752 309.76 309.76 309.76z"></path>
      <path d="M501.76 245.76h20.48c5.632 0 10.24 4.608 10.24 10.24v81.92c0 5.632-4.608 10.24-10.24 10.24h-20.48c-5.632 0-10.24-4.608-10.24-10.24V256c0-5.632 4.608-10.24 10.24-10.24zM714.24 328.192c3.072 3.072 3.072 7.68 0 10.752l-32.768 32.768c-3.072 3.072-7.68 3.072-10.752 0-3.072-3.072-3.072-7.68 0-10.752l32.768-32.768c3.072-3.072 8.192-3.072 10.752 0zM366.08 655.872c3.072 3.072 3.072 7.68 0 10.752l-32.768 32.768c-3.072 3.072-7.68 3.072-10.752 0-3.072-3.072-3.072-7.68 0-10.752l32.768-32.768c3.072-3.072 8.192-3.072 10.752 0zM650.752 655.872c3.072-3.072 7.68-3.072 10.752 0l32.768 32.768c3.072 3.072 3.072 7.68 0 10.752-3.072 3.072-7.68 3.072-10.752 0l-32.768-32.768c-3.072-3.072-3.072-8.192 0-10.752zM353.28 501.76v20.48c0 5.632-4.608 10.24-10.24 10.24H261.12c-5.632 0-10.24-4.608-10.24-10.24v-20.48c0-5.632 4.608-10.24 10.24-10.24h81.92c5.632 0 10.24 4.608 10.24 10.24zM501.76 675.84h20.48c5.632 0 10.24 4.608 10.24 10.24v81.92c0 5.632-4.608 10.24-10.24 10.24h-20.48c-5.632 0-10.24-4.608-10.24-10.24v-81.92c0-5.632 4.608-10.24 10.24-10.24zM773.12 501.76v20.48c0 5.632-4.608 10.24-10.24 10.24h-81.92c-5.632 0-10.24-4.608-10.24-10.24v-20.48c0-5.632 4.608-10.24 10.24-10.24h81.92c5.632 0 10.24 4.608 10.24 10.24zM515.584 473.088h0.512L395.264 317.952c-3.072-4.608-9.728-5.12-14.336-1.536l-24.064 18.944c-4.608 3.584-5.12 9.728-1.536 14.336l120.32 154.624c4.096-17.92 20.48-31.232 39.936-31.232z" fill="#0070bf"></path>
      <path d="M519.68 463.872L401.408 312.32c-3.072-3.584-7.168-6.144-11.776-6.656-5.12-0.512-9.728 0.512-13.824 3.584l-24.064 18.944c-8.192 6.144-9.216 16.896-3.072 25.088l115.712 148.992c-0.512 3.072-1.024 6.656-1.024 9.728 0 26.624 22.016 48.64 48.64 48.64s48.64-22.016 48.64-48.64c0-24.064-17.408-44.544-40.96-48.128z m-158.72-119.808c-0.512-0.512-1.536-2.048 0-3.584l24.064-18.944c1.024-0.512 1.536-0.512 2.048-0.512 1.024 0 1.024 0 1.536 0.512l111.616 143.36c-11.776 3.072-22.016 10.752-28.672 20.48L360.96 344.064z m151.04 201.216c-14.336 0-26.624-9.216-31.232-22.016-1.024-3.584-2.048-7.168-2.048-11.264 0-4.608 1.024-9.216 2.56-13.312 5.12-11.264 15.872-19.456 29.184-19.968h1.024c13.824 0 25.6 8.192 30.72 19.968 1.536 4.096 2.56 8.704 2.56 13.312 0.512 18.432-14.336 33.28-32.768 33.28z"></path>
    </svg>
  );

  const CraneHookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M138.24 435.2h51.2c5.632 0 10.24 4.608 10.24 10.24v179.2c0 5.632-4.608 10.24-10.24 10.24H138.24c-5.632 0-10.24-4.608-10.24-10.24V445.44c0-5.632 4.608-10.24 10.24-10.24z" fill="#0070bf"></path>
      <path d="M189.44 642.56H138.24c-9.728 0-17.92-8.192-17.92-17.92V445.44c0-9.728 8.192-17.92 17.92-17.92h51.2c9.728 0 17.92 8.192 17.92 17.92v179.2c0 9.728-8.192 17.92-17.92 17.92z m-51.2-199.68c-1.536 0-2.56 1.024-2.56 2.56v179.2c0 1.536 1.024 2.56 2.56 2.56h51.2c1.536 0 2.56-1.024 2.56-2.56V445.44c0-1.536-1.024-2.56-2.56-2.56H138.24z"></path>
      <path d="M296.96 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM665.6 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM358.4 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM727.04 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM419.84 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM788.48 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM481.28 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM849.92 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM542.72 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM906.24 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72zM604.16 168.96v40.96c0 5.632-4.608 10.24-10.24 10.24h-10.24c-5.632 0-10.24-4.608-10.24-10.24v-40.96h30.72z" fill="#0070bf"></path>
      <path d="M924.16 153.6h-762.88c-18.432 0-33.28 14.848-33.28 33.28V194.56h-25.6c-14.336 0-25.6 11.264-25.6 25.6v633.344c0 14.336 11.264 25.6 25.6 25.6h122.88c14.336 0 25.6-11.264 25.6-25.6V327.68h673.28c18.432 0 33.28-14.848 33.28-33.28v-107.52c0-18.432-14.848-33.28-33.28-33.28zM235.52 853.504c0 5.632-4.608 10.24-10.24 10.24H102.4c-5.632 0-10.24-4.608-10.24-10.24V220.16c0-5.632 4.608-10.24 10.24-10.24h57.344c3.584 0 6.656 2.048 8.704 5.12l65.536 106.496c1.024 1.536 1.536 3.584 1.536 5.12v526.848zM942.08 294.4c0 9.728-8.192 17.92-17.92 17.92l-677.888-0.512-64.512-104.96c-4.608-7.68-12.8-12.288-22.016-12.288H143.36v-7.68c0-9.728 8.192-17.92 17.92-17.92h762.88c9.728 0 17.92 8.192 17.92 17.92v107.52z"></path>
    </svg>
  );

  const CalendarCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M363.52 148.48v-24.576c0-3.584 4.608-6.144 10.24-6.144h40.96c5.632 0 10.24 2.56 10.24 6.144V148.48H363.52zM481.28 148.48v-24.576c0-3.584 4.608-6.144 10.24-6.144h40.96c5.632 0 10.24 2.56 10.24 6.144V148.48H481.28z" fill="#0070bf"></path>
      <path d="M885.248 445.44l-14.848-0.512c-16.896-81.408-71.68-138.24-133.12-138.24-54.784 0-104.448 44.544-126.464 113.664l-1.024 2.56-2.56 1.536c-4.096 2.56-8.704 4.096-13.312 4.096H317.44c-14.336 0-25.6-11.264-25.6-25.6v-25.088H240.64v25.088c0 14.336-11.264 25.6-25.6 25.6h-40.96c-14.336 0-25.6-11.264-25.6-25.6V168.96c0-14.336 11.264-25.6 25.6-25.6h40.96c14.336 0 25.6 11.264 25.6 25.6v25.088h51.2V168.96c0-14.336 11.264-25.6 25.6-25.6h276.48c14.336 0 25.6 11.264 25.6 25.6v5.12h43.52C788.48 174.08 890.88 275.456 890.88 400.384c0 16.896-2.048 31.744-5.632 45.056zM225.28 361.984h81.92v40.448c0 5.632 4.608 10.24 10.24 10.24h276.48c1.024 0 2.048 0 3.072-0.512 24.576-73.728 79.36-121.344 140.288-121.344 59.392 0 112.64 46.08 138.24 115.712v-6.144c0-116.224-95.232-210.944-212.48-210.944H604.16v-20.48c0-5.632-4.608-10.24-10.24-10.24H317.44c-5.632 0-10.24 4.608-10.24 10.24v40.448H225.28V168.96c0-5.632-4.608-10.24-10.24-10.24h-40.96c-5.632 0-10.24 4.608-10.24 10.24v233.472c0 5.632 4.608 10.24 10.24 10.24h40.96c5.632 0 10.24-4.608 10.24-10.24v-40.448z"></path>
      <path d="M384 460.8h143.36c3.072 0 5.12 2.048 5.12 5.12v133.12c0 3.072-2.048 5.12-5.12 5.12H384c-3.072 0-5.12-2.048-5.12-5.12V465.92c0-3.072 2.048-5.12 5.12-5.12z" fill="#0070bf"></path>
      <path d="M386.56 596.48h138.24v-128h-138.24v128z m-2.56-143.36h143.36c7.168 0 12.8 5.632 12.8 12.8v133.12c0 7.168-5.632 12.8-12.8 12.8H384c-7.168 0-12.8-5.632-12.8-12.8V465.92c0-7.168 5.632-12.8 12.8-12.8zM353.28 906.24h204.8v-256H353.28v256z m-5.12-271.36h215.04c5.632 0 10.24 4.608 10.24 10.24v266.24c0 5.632-4.608 10.24-10.24 10.24H348.16c-5.632 0-10.24-4.608-10.24-10.24v-266.24c0-5.632 4.608-10.24 10.24-10.24z"></path>
    </svg>
  );

  const WrenchHammerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M215.04 143.36v-40.96c0-5.632 4.608-10.24 10.24-10.24h40.96c5.632 0 10.24 4.608 10.24 10.24v40.96H215.04zM399.36 143.36v-40.96c0-5.632 4.608-10.24 10.24-10.24h40.96c5.632 0 10.24 4.608 10.24 10.24v40.96H399.36z" fill="#0070bf"></path>
      <path d="M168.96 158.72v182.784c0 48.128 38.912 87.04 87.04 87.04h153.6c48.128 0 87.04-38.912 87.04-87.04V159.232L168.96 158.72z m343.04-14.848v197.632c0 56.32-46.08 102.4-102.4 102.4H256c-56.32 0-102.4-46.08-102.4-102.4V143.36l358.4 0.512z"></path>
      <path d="M284.16 460.8h76.8c11.264 0 20.48 9.216 20.48 20.48v2.56l-5.632 51.2c-1.024 10.24-9.728 17.92-20.48 17.92H290.304c-10.24 0-18.944-7.68-20.48-17.92l-6.144-51.2c-1.536-11.264 6.656-21.504 17.92-23.04h2.56z" fill="#0070bf"></path>
      <path d="M284.16 476.16h-0.512c-2.56 0.512-4.608 3.072-4.608 5.632l6.144 51.2c0.512 2.56 2.56 4.608 5.12 4.608h64.512c2.56 0 4.608-2.048 5.12-4.608l5.632-51.2V481.28c0-3.072-2.048-5.12-5.12-5.12H284.16z m0-15.36h76.8c11.264 0 20.48 9.216 20.48 20.48v2.56l-5.632 51.2c-1.024 10.24-9.728 17.92-20.48 17.92H290.304c-10.24 0-18.944-7.68-20.48-17.92l-6.144-51.2c-1.536-11.264 6.656-21.504 17.92-23.04h2.56zM307.2 591.872v156.672c0 77.824 62.976 140.8 140.8 140.8H460.8c77.824 0 140.8-62.976 140.8-140.8v-156.672H568.32V747.52c0 62.976-51.2 113.664-113.664 113.664s-113.664-51.2-113.664-113.664v-155.648H307.2z m48.64-15.36V747.52c0 54.272 44.032 98.304 98.304 98.304s98.304-44.032 98.304-98.304v-171.008h64v172.032c0 86.016-70.144 156.16-156.16 156.16h-12.8c-86.016 0-156.16-70.144-156.16-156.16v-172.032h64.512z"></path>
      <path d="M862.208 732.16v-162.816c0-74.24-60.416-134.656-134.656-134.656h-24.576c-74.24 0-134.656 60.416-134.656 134.656V732.16h33.28v-155.648c0-62.976 51.2-113.664 113.664-113.664s113.664 51.2 113.664 113.664V732.16h33.28z m-48.64 15.36v-171.008c0-54.272-44.032-98.304-98.304-98.304s-98.304 44.032-98.304 98.304V747.52H552.96v-178.176c0-82.944 67.072-150.016 150.016-150.016h24.576c82.944 0 150.016 67.072 150.016 150.016V747.52h-64z"></path>
    </svg>
  );

  const BoxCogIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      {...props}
    >
      <path d="M389.12 675.84h235.52v40.96H389.12z" fill="#0070bf"></path>
      <path d="M403.968 634.88h216.576l23.552-62.976 4.608-2.56c76.8-43.52 123.904-120.832 123.904-205.312 0-133.12-116.736-241.152-261.12-241.152S250.88 230.912 250.88 364.032c0 84.48 47.616 161.792 124.416 205.312l4.608 2.56 24.064 62.976zM235.52 364.032C235.52 222.208 359.424 107.52 512 107.52s276.48 114.688 276.48 256.512c0 92.672-52.736 173.568-132.096 218.624l-25.088 67.584H393.728l-26.112-67.584C288.256 537.6 235.52 456.704 235.52 364.032zM619.52 762.88H404.48v112.64c0 5.632 4.608 10.24 10.24 10.24h194.56c5.632 0 10.24-4.608 10.24-10.24v-112.64z m15.36-15.36v128c0 14.336-11.264 25.6-25.6 25.6H414.72c-14.336 0-25.6-11.264-25.6-25.6v-128h245.76zM401.92 714.24h220.16v-25.6h-220.16v25.6z m235.52-40.96v56.32h-250.88v-56.32h250.88z"></path>
      <path d="M557.568 318.464c-14.848-2.56-29.184 0-41.984 5.632-11.776-5.632-26.112-7.68-41.472-5.632-36.864 5.632-56.832 33.792-59.392 78.848V634.88h30.72V398.848c2.048-31.744 12.8-47.104 33.792-50.176 2.048-0.512 4.096-0.512 6.656-0.512-9.728 13.312-15.36 30.208-15.872 49.664-1.024 46.592 19.456 77.312 47.104 77.312 25.6 0 44.032-37.888 43.008-77.312-0.512-18.432-6.144-35.84-15.872-49.664 3.072 0 5.632 0 8.704 0.512 22.016 3.584 32.768 17.92 32.768 49.664V634.88h30.72V398.336c0-45.568-19.968-73.728-58.88-79.872z m-28.16 80.384c0.512 13.824-2.048 26.624-7.168 36.352-2.048 4.096-4.096 7.168-5.632 8.704l-0.512 0.512c-2.048-0.512-4.608-2.56-7.168-6.656-5.12-8.192-8.704-20.992-8.192-39.424 0.512-15.872 5.632-28.672 14.336-37.376 8.704 9.216 13.824 22.528 14.336 37.888z"></path>
    </svg>
  );

  const services = [
    {
      id: 1,
      icon: GearWrenchIcon,
      title: "Operation & Maintenance (O&M)",
      description: "We specialize in providing reliable O&M services across multiple sectors, ensuring your industrial plants run at peak performance.",
      features: [
        "Thermal Power Plants",
        "Biomass & Multi-Fuel Systems",
        "Process Boilers and Utilities",
        "Distillery & Sugar Plants",
        "Paper & Textile Plants",
        "Milk & Dairy Processing",
        "Edible Oil & Food Processing",
        "Steel, Cement & Rice Mills",
        "Water Treatment Plants"
      ],
      details: [
        "Utilities: Thermopack, Thermosyphon, Chillers, Nitrogen & Hydrogen Plants",
        "Water Treatment: PTP, STP, ETP, Reverse Osmosis, DM Plants"
      ]
    },
    {
      id: 2,
      icon: WrenchHammerIcon,
      title: "Overhauling, Re-Rating & Upgrading",
      description: "Comprehensive overhauling and upgrading services to enhance performance and extend equipment lifespan.",
      features: [
        "Steam Turbines (including re-rating and performance optimization)",
        "Cooling Towers",
        "Fuel Handling Systems",
        "Boilers (AFBC, CFBC, etc.)",
        "Air Cooled Condensers"
      ],
      details: []
    },
    {
      id: 3,
      icon: CompassDraftIcon,
      title: "Project Services",
      description: "Full-scale project services from erection to commissioning and reverse engineering.",
      features: [
        "Erection & Commissioning Services",
        "Reverse Engineering",
        "Thermal Power Plants",
        "Boilers and Steam Turbines",
        "Cooling Systems",
        "Fuel Handling & Ash Disposal Systems",
        "Water Treatment Systems"
      ],
      details: [
        "Reverse Engineering for Steam Turbine Spares and critical components"
      ]
    },
    {
      id: 4,
      icon: CalendarCheckIcon,
      title: "Maintenance Contracts",
      description: "Comprehensive maintenance solutions to ensure minimal downtime and optimal performance.",
      features: [
        "Annual Maintenance Contracts (AMC)",
        "Shutdown Management",
        "Diagnostic & Troubleshooting",
        "Mechanical Systems",
        "Water Treatment Systems",
        "Electrical & Instrumentation"
      ],
      details: [
        "Planned shutdowns and breakdown maintenance",
        "Comprehensive diagnostic services"
      ]
    },
    {
      id: 5,
      icon: CraneHookIcon,
      title: "Specialized Services",
      description: "Advanced specialized services for optimization and continuous improvement.",
      features: [
        "Fuel Management",
        "Condenser Modernization",
        "Boiler Descaling",
        "RO Membrane Cleaning",
        "PHE Descaling Contracts",
        "Continuous Improvement",
        "Utilities Optimization"
      ],
      details: [
        "Reducing steam consumption and improving energy efficiency",
        "Optimize performance and reduce operational costs"
      ]
    },
    {
      id: 6,
      icon: BoxCogIcon,
      title: "Complete Maintenance Support",
      description: "End-to-end maintenance support ensuring all systems operate optimally.",
      features: [
        "Spare Parts Supply & Equipment Fitting",
        "Data Bank preparation",
        "Ongoing Plant Support",
        "Tools, Tackles & Mobile Equipment",
        "Consumables Management"
      ],
      details: [
        "Data Bank for spares, tools, tackles, mobile equipment, and consumables"
      ]
    }
  ];

  const whyChoose = [
    {
      icon: GearWrenchIcon,
      title: "Experienced Team",
      description: "Our engineers, technicians, and experts bring 30+ years of experience in handling complex operations and maintenance tasks."
    },
    {
      icon: CompassDraftIcon,
      title: "Comprehensive Services",
      description: "From design to maintenance, we offer end-to-end support for power plants, industrial systems, and utilities."
    },
    {
      icon: CraneHookIcon,
      title: "Proven Track Record",
      description: "We've successfully managed projects for Thermal Power Plants, Distilleries, and more, ensuring maximum efficiency and minimal downtime."
    },
    {
      icon: BoxCogIcon,
      title: "Client-Centric Approach",
      description: "We strive to meet and exceed client expectations with innovative solutions and cost-effective services."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-container">
          <div className="cs-hero-content">
            <h1 className="cs-hero-title">Services We Provide</h1>
            <p className="cs-hero-text">
              At Braintechh Engineers, we offer a comprehensive suite of services designed to keep 
              industrial plants running at peak performance. Our expertise spans various industries, 
              ensuring that our clients receive unparalleled service, from installation to ongoing 
              maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-services-grid">
            {services.map((service) => (
              <div key={service.id} className="cs-service-card">
                <div className="cs-service-header">
                  <div className="cs-service-icon">
                    <service.icon width="40" height="40" />
                  </div>
                  <h3 className="cs-service-title">{service.title}</h3>
                </div>
                
                <div className="cs-service-content">
                  <p className="cs-service-description">{service.description}</p>
                  
                  <div className="cs-features">
                    <h4 className="cs-features-title">Key Services:</h4>
                    <ul className="cs-features-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="cs-feature-item">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                              fill="#0070c0"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.details.length > 0 && (
                    <div className="cs-service-details">
                      {service.details.map((detail, index) => (
                        <p key={index} className="cs-detail-text">{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="cs-section cs-why-choose">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Why Choose Us</span>
            <h2 className="cs-title">Why Choose <span className="cs-highlight">Braintechh Engineers</span></h2>
          </div>

          <div className="cs-why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="cs-why-card">
                <div className="cs-why-icon">
                  <item.icon width="48" height="48" />
                </div>
                <h3 className="cs-why-title">{item.title}</h3>
                <p className="cs-why-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs-section cs-cta">
        <div className="cs-container">
          <div className="cs-cta-content">
            <h2 className="cs-cta-title">Ready to Optimize Your Plant Performance?</h2>
            <p className="cs-cta-text">
              Contact us today to discuss how our comprehensive services can help your business 
              achieve maximum efficiency and reliability.
            </p>
            <div className="cs-cta-buttons">
              <a href="tel:+91-9719671863" className="cs-button-solid cs-button-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Global Variables - Matching Past Style */
        .cs-section {
          --primary: #0070c0;
          --secondary: #005a9e;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --headerFontSize: clamp(1.75rem, 3vw, 2.5rem);
          --bodyFontSize: 1.05rem;
          --sectionPadding: clamp(3.5rem, 6vw, 7rem) 1rem;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero Section */
        .cs-hero {
          padding: 5rem 1rem ;
          background: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.6)),
    url('/f1.jpg') center/cover no-repeat;
          text-align: center;
          color: white;
        }

        .cs-hero-content {
          max-width: 48rem;
          margin: 0 auto;
        }

        .cs-topper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--headerColor);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .cs-topper:before {
          content: '';
          width: 28px;
          height: 2px;
          background: currentColor;
          opacity: 0.8;
        }

        .cs-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: black;
          letter-spacing: 0.01em;
        }

        .cs-hero-text {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          color: black;
          opacity: 0.9;
        }

        /* Main Services Section */
        .cs-section {
          padding: var(--sectionPadding);
          background: #ffffff;
        }

        .cs-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 48rem) {
          .cs-services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (min-width: 64rem) {
          .cs-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Service Card */
        .cs-service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cs-service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 112, 192, 0.15);
        }

        .cs-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transform: scaleX(0);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .cs-service-card:hover::before {
          transform: scaleX(1);
        }

        .cs-service-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cs-service-icon {
          width: 60px;
          height: 60px;
          background: rgba(0, 112, 192, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .cs-service-card:hover .cs-service-icon {
          background: var(--primary);
          transform: scale(1.1);
        }

        .cs-service-icon svg {
          width: 30px;
          height: 30px;
          transition: all 0.3s ease;
        }

        .cs-service-card:hover .cs-service-icon svg {
          color: white;
        }

        .cs-service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .cs-service-content {
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .cs-service-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--bodyTextColor);
          margin: 0 0 1.5rem 0;
          opacity: 0.9;
        }

        .cs-features-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--headerColor);
          margin: 0 0 1rem 0;
        }

        .cs-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
        }

        .cs-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: var(--bodyTextColor);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .cs-feature-item svg {
          width: 16px;
          height: 16px;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .cs-service-details {
          background: rgba(0, 112, 192, 0.05);
          padding: 1rem;
          border: 1px solid rgba(0, 112, 192, 0.1);
          margin-top: 1rem;
        }

        .cs-detail-text {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--bodyTextColor);
          margin: 0;
          font-style: italic;
        }

        /* Why Choose Section */
        .cs-why-choose {
          background: #f8fafc;
        }

        .cs-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 3rem auto;
        }

        .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        .cs-highlight {
          color: var(--primary);
        }

        .cs-why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 48rem) {
          .cs-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 64rem) {
          .cs-why-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .cs-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .cs-why-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-why-icon {
          width: 80px;
          height: 80px;
          background: rgba(0, 112, 192, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          transition: all 0.3s ease;
        }

        .cs-why-card:hover .cs-why-icon {
          background: var(--primary);
          transform: scale(1.1);
        }

        .cs-why-icon svg {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        .cs-why-card:hover .cs-why-icon svg {
          color: white;
        }

        .cs-why-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0 0 1rem 0;
        }

        .cs-why-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--bodyTextColor);
          margin: 0;
          opacity: 0.9;
        }

        /* CTA Section */
        .cs-cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          text-align: center;
        }

        .cs-cta-content {
          max-width: 48rem;
          margin: 0 auto;
        }

        .cs-cta-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0 0 1rem 0;
          color: #ffffff;
        }

        .cs-cta-text {
          font-size: 1.1rem;
          line-height: 1.75;
          margin: 0 0 2rem 0;
          color: #ffffff;
          opacity: 0.9;
        }

        .cs-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        @media (min-width: 48rem) {
          .cs-cta-buttons {
            flex-direction: row;
          }
        }

        .cs-button-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 1.5rem;
          background: var(--primary);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid var(--primary);
          gap: 0.5rem;
          width: 100%;
          text-align: center;
        }

        .cs-button-solid:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 112, 192, 0.25);
        }

        .cs-button-secondary {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        .cs-button-secondary:hover {
          background: #ffffff;
          color: var(--primary);
          border-color: #ffffff;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-service-card,
          .cs-service-icon,
          .cs-service-icon svg,
          .cs-why-card,
          .cs-why-icon,
          .cs-why-icon svg,
          .cs-button-solid {
            transition: none;
          }
          
          .cs-service-card:hover,
          .cs-why-card:hover,
          .cs-button-solid:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default ServicesPage;