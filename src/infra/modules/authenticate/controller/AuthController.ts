import {Request, Response} from 'express'
import ContractController from '../../contract.controller'
import {inject, injectable} from "inversify";
import {TYPES} from "../../../../core/container/types";
import {DatabaseInterface} from "../../../applications/bases/DatabaseInterface";
import ConflictUserException from "../exceptions/ConflictUserException";

/**
 * RedocsController
 * gestion de la docs
 */
@injectable()
export default class AuthController extends ContractController {
   constructor(@inject(TYPES.DatabaseInterface) private readonly dataBase: DatabaseInterface) {
      super()
   }

   public login = () => {

   }

   public logout = () => {

   }

   public create = async (req: Request, res: Response) => {
      try {
         const prisma = this.dataBase.execute()
         await prisma.user.create({data: req.body});
         return res.status(200).json({
            success: true,
            message: 'User created successfully'
         })
      } catch (e) {
         throw new ConflictUserException();
      }
   }
}
