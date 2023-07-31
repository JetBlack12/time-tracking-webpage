<Body class="dark:bg-slate-300"/>
<main class="flex flex-col gap-[2rem]">
  <button class="w-[3rem] mb-[-1rem]" id="btn" on:click={onClick}>
    <div class="bg-violet p-[0.75rem] rounded-[10px] w-[3.5rem] shadowL" id="btnD">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFF" width="30" height="30">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
  </button>
  <article class="flex gap-[2rem]">
    <section>
      <div class="bg-blue dark:bg-slate-400 z-[2] p-[3rem] pt-[2rem] pl-[2rem] pr-[6rem] rounded-[13px] gap-[2.5rem] grid relative">
        <img src={pfp} alt="" width="90" class="border-[0.13rem] border-solid rounded-[50%] border-white"/>
        <div>
          <p class="font-RubikLight text-pale-blue dark:text-white">
            Report for
          </p>
          <h1 class="font-RubikLight text-[50px] w-[10rem] pb-[1rem] text-white leading-[4rem]">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center pl-[2rem] gap-[0.5rem] bg-dark-blue dark:bg-slate-500 h-[11rem] relative top-[-1.75rem] pt-[0.75rem] rounded-[13px]">
        {#each contents as content,i}
          {#if i === 0}
            <button class={className} on:click={() => updateTimeFrame(content.func1, content.func2)} autofocus>
              {content.content}
            </button>
          {:else}
            <button class={className} on:click={() => updateTimeFrame(content.func1, content.func2)}>
              {content.content}
            </button>
          {/if}
        {/each}
      </div>
    </section>
    <section class="s">
      {#each typedDatas as data}
      <div>
        <div class={data.imgClass}>
          <img src={data.img} alt="" class={data.imgClass2}>
        </div>
        <div class="bg-dark-blue dark:bg-slate-400 relative p-[2rem] rounded-[10px] z-[1]">
          <div class="flex items-center justify-between font-RubikRegular text-white gap-[6rem] mb-[1rem]">
            {data.title}
            <button>
              <img src={icon} width="21" alt="" class="shrink-0 dark:hidden"/>
              <img src={dots} width="21" alt="" class="shrink-0 dark:block hidden"/>
            </button>
          </div>
          <p class="font-RubikLight text-[50px] text-white">{data.timeframes[timeFrame].current}{Number(data.timeframes[timeFrame].current) === 1 ? "hr" : "hrs"}</p>
          <p class="font-RubikLight text-des-blue dark:text-white">{timeFrame2} - {data.timeframes[timeFrame].previous}{Number(data.timeframes[timeFrame].previous) <= 1 ? "hr" : "hrs"}</p>
        </div>
      </div>
      {/each}
    </section>
  </article>
</main>

<script lang="ts">
  import { Body } from "svelte-body"
  import dots from "../dots.svg"
  import pfp from "../image-jeremy.png"
  import icon from "../icon-ellipsis.svg"
  import datas from "../data.json"
  import work from "../icon-work.svg"
  import play from "../icon-play.svg"
  import study from "../icon-study.svg"
  import exercise from "../icon-exercise.svg"
  import social from "../icon-social.svg"
  import selfcare from "../icon-self-care.svg"
  const className = "font-RubikRegular border-transparent outline-none btn text-des-blue dark:text-gray-800 dark:hover:text-white dark:focus:text-white dark:active:text-white hover:text-white active:text-white focus:text-[17px] focus:text-white"
  const contents = [
    {
      content:"Daily",
      func1:"daily",
      func2:"Yesterday",
      bool: true
    },
    {
      content:"Weekly",
      func1:"weekly",
      func2:"Last Week",
      bool: false
    },
    {
      content:"Monthly",
      func1:"monthly",
      func2:"Last Month",
      bool: false
    },
  ]
  const sun =  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFF" width="30" height="30">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>`

  const moon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFF" width="30" height="30">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>`
  let state = false
  const onClick = () => {
    if(state == false){
      state = true
      document.documentElement.classList.add("dark")
      document.getElementById("btnD").innerHTML = moon
      document.getElementById("btnD").classList.remove("bg-violet")
      document.getElementById("btnD").classList.add("bg-soft-orange")
      document.getElementById("btnD").classList.remove("shadowL")
      document.getElementById("btnD").classList.add("shadowD")
    }
    else if(state == true){
      state = false
      document.documentElement.classList.remove("dark")
      document.getElementById("btnD").innerHTML = sun
      document.getElementById("btnD").classList.add("bg-violet")
      document.getElementById("btnD").classList.remove("bg-soft-orange")
      document.getElementById("btnD").classList.add("shadowL")
      document.getElementById("btnD").classList.remove("shadowD")
    }
  }

  let timeFrame = 'daily'; // default time frame
  let timeFrame2 = 'Yesterday';
  interface Data {
    title:string;
    timeframes:any;
    img:any;
    imgClass:string;
    imgClass2:string;
  }
  const typedDatas = datas as Data[];
  
  const imgs = [
    {
      img:work
    },
    {
      img:play
    },
    {
      img:study
    },
    {
      img:exercise
    },
    {
      img:social
    },
    {
      img:selfcare
    },
  ]
  const imgClass = [
    {
      imgClass:"bg-light-red relative z-[0] bottom-[-2.1rem] overflow-hidden rounded-[10px] mt-[-2rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.6rem] right-[-9.3rem]"
    },
    {
      imgClass:"bg-soft-blue relative z-[0] bottom-[-2.1rem] overflow-hidden rounded-[10px] mt-[-2rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.6rem] right-[-9.3rem]"
    },
    {
      imgClass:"bg-light-red-t relative z-[0] bottom-[-2.1rem] overflow-hidden rounded-[10px] mt-[-2rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.6rem] right-[-9.3rem]"
    },
    {
      imgClass:"bg-lime-green relative z-[0] bottom-[-3rem] h-[6rem] overflow-hidden rounded-[10px] mt-[-5rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.2rem] right-[-9.3rem]"
    },
    {
      imgClass:"bg-soft-orange relative z-[0] bottom-[-3rem] overflow-hidden rounded-[10px] h-[6rem] mt-[-5rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.6rem] right-[-9.7rem]"
    },
    {
      imgClass:"bg-violet relative z-[0] bottom-[-3rem] overflow-hidden rounded-[10px] h-[6rem] mt-[-5rem]",
      imgClass2:"z-[0] bottom-[-1rem] relative top-[-0.6rem] right-[-9.3rem]"
    },

  ]
  
  typedDatas.forEach((data, i) => {
    data.img = imgs[i].img
    data.imgClass = imgClass[i].imgClass
    data.imgClass2 = imgClass[i].imgClass2
  })

  function updateTimeFrame(newTimeFrame, newTimeFrame2) {
    timeFrame = newTimeFrame;
    timeFrame2 = newTimeFrame2;
  }
</script>

<style lang="postcss">
  img{
    height:min-content;
  }
  .s{
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    gap: 2rem;
  }
  .shadowL{
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
  .shadowD{
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
</style>
