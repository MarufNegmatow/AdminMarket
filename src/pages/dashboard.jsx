// Dashboard.jsx
import React from 'react';
import Navigation from '../components/navigation';
import icon1 from '../assets/div.MuiBox-root.png';
import icon2 from '../assets/iconly-glass-discount.svg.png';
import icon3 from '../assets/div.MuiBox-root (1).png';
import ApexChart from '../components/apex'; // Импортируйте ваш классовый компонент

const Dashboard = () => {
  return (
    <div className="w-[100%] flex flex-wrap">
      <Navigation />
      <div className="p-[10px] flex flex-col gap-[20px]">
        <h1 className="text-[30px] font-[800]">Dashboard</h1>
        <div className="flex flex-wrap items-start gap-[20px]">
          <div className=" flex flex-col gap-[10px]">
            <div className="flex items-center justify-center flex-wrap gap-[20px]">
              <div className="w-[230px] h-[84px] rounded-[10px] flex items-center justify-evenly gap-[-10px] bg-[#FEF3F2]">
                <img src={icon1} className="w-[50px]" alt="" />
                <div className="flex flex-col items-start gap-[-10px]">
                  <h1 className="text-[#6C737F] text-[14px]">Sales</h1>
                  <h1 className="text-[24px] font-[800]">$152k</h1>
                </div>
              </div>

              <div className="w-[230px] h-[84px] rounded-[10px] flex items-center justify-evenly gap-[-10px] bg-[#FFFAEB]">
                <img src={icon2} className="w-[50px]" alt="" />
                <div className="flex flex-col items-start gap-[-10px]">
                  <h1 className="text-[#6C737F] text-[14px]">Sales</h1>
                  <h1 className="text-[24px] font-[800]">$152k</h1>
                </div>
              </div>

              <div className="w-[230px] h-[84px] rounded-[10px] flex items-center justify-evenly gap-[-10px] bg-[#F0FDF9]">
                <img src={icon3} className="w-[50px]" alt="" />
                <div className="flex flex-col items-start gap-[-10px]">
                  <h1 className="text-[#6C737F] text-[14px]">Sales</h1>
                  <h1 className="text-[24px] font-[800]">$152k</h1>
                </div>
              </div>
            </div>
            <div>
              <ApexChart /> 
            </div>
          </div>

          <div className="sm:w-[300px]  md:w-[350px] lg:w-[420px] xl:w-[450px]  2xl:w-[480px] m-auto border-[1px] border-solid border-lightgray rounded-[10px] p-[10px]">
            <div className='flex items-center justify-between'>
              <h1 className='text-[18px] font-[700] text-[#111927]'>Top selling products</h1>
              <p className='text-[16px] font-[700]'>See All</p>
            </div>
            <div className=' flex flex-col gap-[13px] items-center justify-center'>
              <div className='w-[100%] pt-[10px] pb-[10px] rounded-[10px] flex justify-evenly items-center p-[10px]'>
                <img className='w-[52px] rounded' src="https://s3-alpha-sig.figma.com/img/f74b/d86a/34c2ae9d5a4c3ca393cc1ece414c4779?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYVVEqBaXol1g95pqUATjrMFDre5BJjLN1JaU8-ZBWskMsmOjGRwE1pVtvD5OhtFhOVjvubZtr4r4TnyFCiya~Lzqj1NeaDknCaM~69L3Au2qJe9BABEn3HcRr9ut~mt~~coqtbHPDLddRjRw3jXD2cETb~yPIpNPIj~oiZ-JCt0Fb1NjNDKmhhSlW9R1TCB447XSwwRLQ71ID4suuYJiV1ZNXZHOIBtgbRe3gUzJ9RvlFIefXxG6ZUnWOJzNyaXZH3lVq-NFfv8fY0nSsikjxazJKAyztrYOhyT9CoAEBzq86nkahkGVeXRDy2AiLUQc-cR8XsjW~jPH7ImmqxyIQ__" alt="" />
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#111927] font-[600]'>Healthcare Erbology</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in Accessories</p>
                </div>
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#10B981] font-[600]'>13,153</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in sales</p>
                </div>
              </div>
              <div className='w-[100%] pt-[10px] pb-[10px] rounded-[10px] flex justify-evenly items-center p-[10px]'>
                <img className='w-[52px] rounded' src="https://s3-alpha-sig.figma.com/img/f74b/d86a/34c2ae9d5a4c3ca393cc1ece414c4779?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYVVEqBaXol1g95pqUATjrMFDre5BJjLN1JaU8-ZBWskMsmOjGRwE1pVtvD5OhtFhOVjvubZtr4r4TnyFCiya~Lzqj1NeaDknCaM~69L3Au2qJe9BABEn3HcRr9ut~mt~~coqtbHPDLddRjRw3jXD2cETb~yPIpNPIj~oiZ-JCt0Fb1NjNDKmhhSlW9R1TCB447XSwwRLQ71ID4suuYJiV1ZNXZHOIBtgbRe3gUzJ9RvlFIefXxG6ZUnWOJzNyaXZH3lVq-NFfv8fY0nSsikjxazJKAyztrYOhyT9CoAEBzq86nkahkGVeXRDy2AiLUQc-cR8XsjW~jPH7ImmqxyIQ__" alt="" />
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#111927] font-[600]'>Healthcare Erbology</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in Accessories</p>
                </div>
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#10B981] font-[600]'>13,153</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in sales</p>
                </div>
              </div>
              <div className='w-[100%] pt-[10px] pb-[10px] rounded-[10px] flex justify-evenly items-center p-[10px]'>
                <img className='w-[52px] rounded' src="https://s3-alpha-sig.figma.com/img/f74b/d86a/34c2ae9d5a4c3ca393cc1ece414c4779?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYVVEqBaXol1g95pqUATjrMFDre5BJjLN1JaU8-ZBWskMsmOjGRwE1pVtvD5OhtFhOVjvubZtr4r4TnyFCiya~Lzqj1NeaDknCaM~69L3Au2qJe9BABEn3HcRr9ut~mt~~coqtbHPDLddRjRw3jXD2cETb~yPIpNPIj~oiZ-JCt0Fb1NjNDKmhhSlW9R1TCB447XSwwRLQ71ID4suuYJiV1ZNXZHOIBtgbRe3gUzJ9RvlFIefXxG6ZUnWOJzNyaXZH3lVq-NFfv8fY0nSsikjxazJKAyztrYOhyT9CoAEBzq86nkahkGVeXRDy2AiLUQc-cR8XsjW~jPH7ImmqxyIQ__" alt="" />
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#111927] font-[600]'>Healthcare Erbology</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in Accessories</p>
                </div>
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#10B981] font-[600]'>13,153</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in sales</p>
                </div>
              </div>
              <div className='w-[100%] pt-[10px] pb-[10px] rounded-[10px] flex justify-evenly items-center p-[10px]'>
                <img className='w-[52px] rounded' src="https://s3-alpha-sig.figma.com/img/f74b/d86a/34c2ae9d5a4c3ca393cc1ece414c4779?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYVVEqBaXol1g95pqUATjrMFDre5BJjLN1JaU8-ZBWskMsmOjGRwE1pVtvD5OhtFhOVjvubZtr4r4TnyFCiya~Lzqj1NeaDknCaM~69L3Au2qJe9BABEn3HcRr9ut~mt~~coqtbHPDLddRjRw3jXD2cETb~yPIpNPIj~oiZ-JCt0Fb1NjNDKmhhSlW9R1TCB447XSwwRLQ71ID4suuYJiV1ZNXZHOIBtgbRe3gUzJ9RvlFIefXxG6ZUnWOJzNyaXZH3lVq-NFfv8fY0nSsikjxazJKAyztrYOhyT9CoAEBzq86nkahkGVeXRDy2AiLUQc-cR8XsjW~jPH7ImmqxyIQ__" alt="" />
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#111927] font-[600]'>Healthcare Erbology</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in Accessories</p>
                </div>
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#10B981] font-[600]'>13,153</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in sales</p>
                </div>
              </div>
              <div className='w-[100%] pt-[10px] pb-[10px] rounded-[10px] flex justify-evenly items-center p-[10px]'>
                <img className='w-[52px] rounded' src="https://s3-alpha-sig.figma.com/img/f74b/d86a/34c2ae9d5a4c3ca393cc1ece414c4779?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYVVEqBaXol1g95pqUATjrMFDre5BJjLN1JaU8-ZBWskMsmOjGRwE1pVtvD5OhtFhOVjvubZtr4r4TnyFCiya~Lzqj1NeaDknCaM~69L3Au2qJe9BABEn3HcRr9ut~mt~~coqtbHPDLddRjRw3jXD2cETb~yPIpNPIj~oiZ-JCt0Fb1NjNDKmhhSlW9R1TCB447XSwwRLQ71ID4suuYJiV1ZNXZHOIBtgbRe3gUzJ9RvlFIefXxG6ZUnWOJzNyaXZH3lVq-NFfv8fY0nSsikjxazJKAyztrYOhyT9CoAEBzq86nkahkGVeXRDy2AiLUQc-cR8XsjW~jPH7ImmqxyIQ__" alt="" />
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#111927] font-[600]'>Healthcare Erbology</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in Accessories</p>
                </div>
                <div className='flex flex-col gap-[-10px]'>
                  <h1 className='text-[16px] text-[#10B981] font-[600]'>13,153</h1>
                  <p className='text-[14px] font-[500] text-[#6C737F]'>in sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-start justify-center gap-[20px]'>
          <table className='w-[49%] h-[200px] rounded border-[1px] border-[solid] border-[lightgray] text-center'>
            <thead>
            <h1 className='text-[16px] font-[600] text-center'>Recent Transactions</h1>
              <tr className='border-b-[1px] border-b-[solid] border-b-[lightgray]'>
                <th className='text-[#5A607F] text-[14px]'>Name</th>
                <th className='text-[#5A607F] text-[14px]'>Date</th>
                <th className='text-[#5A607F] text-[14px]'>Amount</th>
                <th className='text-[#5A607F] text-[14px]'>Status</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>

            </tbody>
          </table>
          <table className='w-[49%] h-[200px] rounded border-[1px] border-[solid] border-[lightgray] text-center'>
            <thead>
            <h1 className='text-[16px] font-[600] text-center'>Recent Transactions</h1>
              <tr className='border-b-[1px] border-b-[solid] border-b-[lightgray]'>
                <th className='text-[#5A607F] text-[14px]'>Name</th>
                <th className='text-[#5A607F] text-[14px]'>Date</th>
                <th className='text-[#5A607F] text-[14px]'>Amount</th>
                <th className='text-[#5A607F] text-[14px]'>Status</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>
              <tr>
                <td className='text-[14px] font-[500  ]'>Jagarnath S.</td>
                <td className='text-[14px]'>24.05.2023</td>
                <td className='text-[14px]'>$124.97</td>
                <td className='text-[14px] p-[10_20px] bg-[#C4F8E2] text-[#06A561]'>Paid</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
