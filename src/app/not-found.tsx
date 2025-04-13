import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div>
      <Image 
      src="/birdie.png"
      width={500}
      height={500}
      alt="Not Found Image"
      />
    </div>
  )
}