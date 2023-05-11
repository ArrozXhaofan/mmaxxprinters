import { Maquina } from "@/app/catalogo/models"
import Image from "next/image"
import Link from "next/link"

interface Props{
    data: Maquina
}
 
 function Card({data}:Props) {

  const categoria = data.categoria ? data.categoria.toLowerCase() : '';

  return (
    <div className="flex flex-col gap-3 items-center justify-center p-3 border border-primary rounded-xl">
        <p className="text-xl text-primary">{data.modelo}</p>
        <Image src={data.imagen} width={300} height={150} alt="Printer" className="h-28 object-contain"
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjwEAABXRUJQVlA4WAoAAAAgAAAA0gEAvgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgIAABAkAJ0BKtMBvwA+7XayVCmtJSMiMgpRoB2JaW7d9LG/9qyDrP6B7ACFcqB+VVVVVVVVUfNBK7pmf2Jq973izM1ANTUYtfJmKiM6jsc3Qih1ic7KCFyfZjOD4vZxPfEIUvz7tYjNU7rb3Gk8vVNJl1Tox6vp/kKHPrG+c5znOc5zQU52K21mO3zjGMY4FznOc5znOY5/H+ymtXcRm973ve973ve94oh4GPql+yhb/B28N5/c/+aEIl/APKkbyXwD5xbI+OdFZNCIhIB5Um9lsvgHlSN5L2VCvKhzaDZHPj03PcJQPC7eeKkbyXwDwVI4FhrwqTVwuVh5kQ+1QQSCL4tV4OewoR0zX22R8EDnzqm9FIHOydesarHstIAuAdwZ9ItNq4DalkRDyAD+4KWUBdM6veKtybwRA5CosUIBlR4LASPMcUuYoeM7jYcDFlLiTCtWRA+QsOUsAtxh72BUD8HoU3TQEyxY2DDHpEaQxjvkci8LWP8SQ/wH91BYViFcwoevap5i0ogBcwcCz4EX7ifjZ62jh9pzAsrIxJCvYmlpByBU4W2dh1+dIHk9IfEcrVs0jHaAGntVwiLWhghYNSfHiGGiSnQa5a5c2GVIqABKcsIVdlQWpWGZw4AOm/hEDrAU2PEsYHzAoAZF5nuOv5vpA7GoHnWAzcvJhhz9/eqW4OAozGKGnjFF1CBbj6AV6n11sXzTz2mYMrOlzuxbotJ1s7KiDUxaDcuGQNmhXfsekfu6CKkvriZGSXfAzgQ8F0zhaIWtl7x+TgcIAAAA" />
        <Link href={`catalogo/${categoria}/${data.id}`}
        className="bg-primary rounded-full px-10 py-2 text-lg text-white hover:text-primary duration-300
        hover:bg-white border hover:border border-primary">
            Ver mas
        </Link>
    </div>
  )
}

export default Card