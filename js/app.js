// const getData = async () => {
//   const response = await fetch(
//     'https://openapi.programming-hero.com/api/ai/tools'
//   );
//   const myData = await response.json();
//   // console.log(myData);
// };

// getData();

const loadingPage = async (cardId) => {
  const forId = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${cardId}`
  );
  const theData = await forId.json();
  // console.log(theData.data.image_link[1]);
  // console.log(theData.data);
  const cardContainer = document.getElementById('card-container');

  const response = await fetch(
    'https://openapi.programming-hero.com/api/ai/tools'
  );
  const myData = await response.json();
  // const slicedData = myData.slice(0, 2);
  // console.log(myData.data.tools);

  myData.data.tools?.splice(5, 1);
  myData.data.tools?.splice(5, 3);
  myData.data.tools?.splice(6, 1);

  // const arrTwo = myData.data.tools?.splice(11, 1);
  // myData.data.tools?.slice(0, 6).forEach((tool) => {
  // myData.data.tools?.splice(0, 5).forEach((tool) => {
  myData.data.tools?.forEach((tool) => {
    console.log(tool.image);
    const div = document.createElement('div');
    div.className = 'card my-12 bg-gray-50 text-black shadow-xl';
    div.innerHTML = `
    <figure class="px-5 pt-5">
    <img src=${tool?.image} alt="Nothing" class="rounded-xl"   onerror="this.src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'"/>
    </figure>
          <div class="card-body">
            <h2 class="text-2xl font-semibold  ">Features</h2>
            <P><span class='mr-1'>1.</span>${tool?.features[0]}</P>
            <P><span class='mr-1'>2.</span>${tool?.features[1]}</P>
            <P class='mb-5'><span class='mr-1'>3.</span>${tool?.features[2]}</P>
            <div class='border-t-2 border-[#11111133]'></div>
            <div>
            <h4 class="text-2xl font-semibold mt-5 ">${tool.name}</h4>
            <div class='flex items-center justify-center gap-1'>
            <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p >${tool.published_in}</p>
            </div>
            </div>
            
            
            <div class="card-actions">
            <button class="btn bg-red-50 border-none rounded-full "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            </div>
            </div>
            `;
    cardContainer.appendChild(div);
  });
};
loadingPage('01');
