import { prisma } from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    const genders = await prisma.gender.findMany({
      select: {
        name: true,
      },
    });
    return res.send(genders);
  } catch (error) {
    console.error("gender", error);
  }
};

export const getGenderById = async (req, res) => {
  try {
    const id = +req.params.id;
    const filteredGender = await prisma.gender.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
      },
    });
    return res.status(200).send(filteredGender);
  } catch (error) {
    console.error("getGenderById", error);
  }
};

export const createGender = async (req, res) => {
  try {
    const { name } = req.body;
    const newGender = await prisma.gender.create({
      data: {
        name,
      },
    });
    return res.status(201).send(newGender);
  } catch (error) {
    console.error("createGender", error);
  }
};

export const updateGender = async (req, res) => {
  try {
    const id = +req.params.id;
    const { name } = req.body;
    const updatedGender = await prisma.gender.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return res.status(201).send(updatedGender);
  } catch (error) {
    console.error("updateGender", error);
  }
};

export const deleteGender = async (req, res) => {
  try {
    const id = +req.params.id;
    const deletedGender = await prisma.gender.delete({
      where: {
        id,
      },
    });
    return res.status(200).send(deletedGender);
  } catch (error) {
    console.error("deleteGender", error);
  }
};
