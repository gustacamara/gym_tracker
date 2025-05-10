import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Helmet } from "react-helmet-async"
import { LineRow } from "./cellLine"
import { Input } from "@/components/ui/input"

export function History () {
  return (
    <>
      <Helmet title="History" />
      <h1 className="text-3xl font-bold tracking-tight">Histórico de treinos</h1>
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros: </span>
        <Input placeholder="Buscar" className="h-8 w-[320]" />
      </form>
      <div className="bg-card rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do treino</TableHead>
              <TableHead className="w-[200px]">Id</TableHead>
              <TableHead className="w-[200px]">Realizado há</TableHead>
              <TableHead className="w-[180px]">Data</TableHead>
              <TableHead className="w-[180px]">Status</TableHead>
              <TableHead className="w-[180px]">Performace</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <LineRow/>
          </TableBody>
        </Table>
      </div>
    </>
  )
}