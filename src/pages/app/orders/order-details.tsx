import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: k12h3hj21gv12231</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                <span>Pendente</span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              Leonardo Oliveira
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">(51) 9 96332279</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">E-mail</TableCell>
            <TableCell className="flex justify-end">
              leonardo@grupomegabazar.com.br
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado ha
            </TableCell>
            <TableCell className="flex justify-end">ha 3 minutos</TableCell>
          </TableRow>
        </Table>

        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Quantidade</TableHead>
            <TableHead className="text-right">Preco</TableHead>
            <TableHead className="text-right">SubTotal</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 69,90</TableCell>
              <TableCell className="text-right"> 139,90 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 59,90</TableCell>
              <TableCell className="text-right"> 119,90 </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido:</TableCell>
              <TableCell className="text-right font-medium">
                R$ 259,60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
