import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, Minus, MoreHorizontal } from "lucide-react"

export function LineRow() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, xs) => {
        return (
          <TableRow key={xs}>
            <TableCell>Superiores A</TableCell>
            <TableCell className="text-muted-foreground">ad160083ju4523</TableCell>
            <TableCell className="text-muted-foreground">há 60 minutos</TableCell>
            <TableCell>04/05/2025</TableCell>
            <TableCell >
              <div className="flex gap-2 items-center ">
                <span className="w-2 h-2 flex bg-green-400 rounded-full"></span>
                <span className="text-muted-foreground">Completo</span>
              </div>
            </TableCell>
            <TableCell >
              {/* for visual */}
              <div className="flex items-center gap-2 ">
                {xs % 2 == 0 ?
                  <>
                    <ArrowUp strokeWidth={2} className="h-4 w-4 text-green-400" />
                    <span>3</span>
                  </>
                  :
                  <>
                    {/* <ArrowDown strokeWidth={2} className="h-4 w-4 text-red-400" /> */}
                    <Minus strokeWidth={2} className="h-4 w-4 text-muted-foreground" />
                    <span>0</span>
                  </>
                }
              </div>
            </TableCell>
            <TableCell >
              <Button variant={"outline"} size={"sm"}>
                <MoreHorizontal className="mr-2 w-3 h-3" />
                ver mais
              </Button>
            </TableCell>

          </TableRow>
        )
      })}
        </>
  )
}