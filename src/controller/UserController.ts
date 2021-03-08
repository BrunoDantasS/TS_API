import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const postUser = async (request: Request, response: Response) => {
  const user = await getRepository(User).save(request.body);
  return response.json(user);
}

export const getUsers = async (request: Request, response: Response) => {
  const user = await getRepository(User).find();
  return response.json(user);
}

export const getUserById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).findOne(id);
  return response.json(user);
}

export const putUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).update(id, request.body);

  if (user.affected === 1) {
    const userUpdated = await getRepository(User).findOne(id);
    return response.json(userUpdated);
  }

  return response.status(404).json({ message: 'User Not Found!' })
}

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).delete(id);

  if(user.affected === 1) {
    return response.json({ message: 'User Removed' })
  }

  return response.status(404).json({ message: 'User Not Found!' })
}


