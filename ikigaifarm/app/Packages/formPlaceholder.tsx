// {/* <section className="mx-auto mt-10 w-full max-w-5xl px-4 pb-20 sm:px-6 lg:mt-16">
//         <form
//           id="BookingForm"
//           onSubmit={
//             handleSubmit
//           }
//           className="rounded-[2rem] border border-[#122a02]/10 bg-[#fbf6e9] p-5 shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8 md:p-10"
//         >
//           <div className="mx-auto max-w-3xl text-center">
//             <p
//               className={`text-xs uppercase tracking-[0.25em] text-[#6b5f3a] sm:text-sm ${notoSerifJP.className}`}
//             >
//               Booking Enquiry
//             </p>

//             <label
//               className={`mt-3 block text-2xl leading-tight text-[#122a02] sm:text-3xl md:text-4xl ${medievalSharp.className}`}
//             >
//               Have a vision for
//               your group?
//               Let&apos;s make it
//               a reality
//               together.
//             </label>
//           </div>

//           <div className="mt-10 grid gap-6 md:grid-cols-2">
//             {/* GROUP NAME */}
//             <div>
//               <input
//                 type="text"
//                 name="groupName"
//                 value={
//                   formData.groupName
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Group Name"
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.groupName && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.groupName
//                   }
//                 </p>
//               )}
//             </div>

//             {/* CONTACT PERSON */}
//             <div>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={
//                   formData.contactPerson
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Contact Person"
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.contactPerson && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.contactPerson
//                   }
//                 </p>
//               )}
//             </div>

//             {/* EMAIL */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={
//                   formData.email
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Email"
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.email
//                   }
//                 </p>
//               )}
//             </div>

//             {/* PHONE */}
//             <div>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={
//                   formData.phone
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Phone"
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.phone && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.phone
//                   }
//                 </p>
//               )}
//             </div>

//             {/* PARTICIPANTS */}
//             <div>
//               <input
//                 type="number"
//                 min="1"
//                 name="participants"
//                 value={
//                   formData.participants
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Participants"
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.participants && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.participants
//                   }
//                 </p>
//               )}
//             </div>

//             {/* DATE */}
//             <div>
//               <input
//                 type="date"
//                 min={
//                   new Date()
//                     .toISOString()
//                     .split(
//                       'T'
//                     )[0]
//                 }
//                 name="preferredDate"
//                 value={
//                   formData.preferredDate
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
//               />

//               {errors.preferredDate && (
//                 <p className="mt-2 text-sm text-red-500">
//                   {
//                     errors.preferredDate
//                   }
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* INTEREST */}
//           <div className="mt-8">
//             <p className="mb-4 text-sm font-medium text-[#122a02]">
//               Primary Interest
//             </p>

//             <div className="grid gap-3 md:grid-cols-2">
//               {[
//                 'Team Building',
//                 'Nature Education',
//                 'Wellness/Meditation',
//                 'Culinary Experience',
//               ].map(
//                 (interest) => (
//                   <label
//                     key={
//                       interest
//                     }
//                     className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#122a02]/10 bg-[#f8f5eb] px-4 py-3"
//                   >
//                     <input
//                       type="radio"
//                       name="interest"
//                       value={
//                         interest
//                       }
//                       checked={
//                         formData.interest ===
//                         interest
//                       }
//                       onChange={
//                         handleChange
//                       }
//                     />

//                     {interest}
//                   </label>
//                 )
//               )}
//             </div>

//             {errors.interest && (
//               <p className="mt-2 text-sm text-red-500">
//                 {
//                   errors.interest
//                 }
//               </p>
//             )}
//           </div>

//           {/* TEXTAREA */}
//           <div className="mt-8">
//             <textarea
//               name="additionalDetails"
//               value={
//                 formData.additionalDetails
//               }
//               onChange={
//                 handleChange
//               }
//               placeholder="Additional Details"
//               className="mt-8 h-36 w-full rounded-3xl border border-[#122a02]/15 bg-white px-5 py-4"
//             />

//             {errors.additionalDetails && (
//               <p className="mt-2 text-sm text-red-500">
//                 {
//                   errors.additionalDetails
//                 }
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="mt-8 flex w-full items-center justify-center rounded-full bg-[#122a02] px-6 py-4 text-sm font-medium text-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
//           >
//             {loading
//               ? 'Submitting...'
//               : 'Submit Enquiry'}
//           </button>

//           {successMessage && (
//             <p className="mt-4 text-center text-green-600">
//               {
//                 successMessage
//               }
//             </p>
//           )}
//         </form>
//       </section> */}
