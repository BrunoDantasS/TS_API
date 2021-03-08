import { getRepository } from "typeorm";
import { Adresses } from "../entity/Adresses";
import { Request, Response } from "express";

export const postAdress = async (request: Request, response: Response) => {
  const adress = await getRepository(Adresses).save(request.body);
  return response.json(adress);
}

export const getAdress = async (request: Request, response: Response) => {
  const adress = await getRepository(Adresses).find();
  return response.json(adress);
}

export const getAdressById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adresses).findOne(id);
  return response.json(adress);
}

export const putAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adresses).update(id, request.body);

  if (adress.affected === 1) {
    const userUpdated = await getRepository(Adresses).findOne(id);
    return response.json(userUpdated);
  }

  return response.status(404).json({ message: 'Adresses Not Found!' });
}

export const deleteAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adresses).delete(id);

  if(adress.affected === 1) {
    return response.json({ message: 'Adresses Removed' });
  }

  return response.status(404).json({ message: 'Adresses Not Found!' });
}
