import Image from 'next/image'
export default function AboutCard({ title, picture }) {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10 pb-14">
      <Image
        src={picture}
        alt="Icon"
        width={260}
        height={300}
        className="mx-auto h-[259px] w-[259px]"
      />

      <div className="w-[262px] text-center font-roboto text-xl font-bold text-cs500">
        {title}
      </div>
    </div>
  )
}
