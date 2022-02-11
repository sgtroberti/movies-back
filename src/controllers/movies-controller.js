import { prisma } from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        gender: true,
      },
    });
    return res.send(movies);
  } catch (error) {
    console.error("gender", error);
  }
};

export const getMovieById = async (req, res) => {
  try {
    const id = +req.params.id;
    const filteredMovie = await prisma.movie.findUnique({
      where: {
        id,
      },
      include: {
        gender: true,
      },
    });
    return res.status(200).send(filteredMovie);
  } catch (error) {
    console.error("getGenderById", error);
  }
};

export const createMovie = async (req, res) => {
  try {
    const user = req.user;
    const { title, description, gender_Id } = req.body;
    const newMovie = await prisma.movie.create({
      data: {
        title,
        description,
        gender_Id,
        user_Id: user.id,
      },
    });
    return res.status(201).send(newMovie);
  } catch (error) {
    console.error("createGender", error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const id = +req.params.id;
    const { title, description, gender_Id } = req.body;
    const updatedMovie = await prisma.movie.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        gender_Id,
      },
    });
    return res.status(201).send(updatedMovie);
  } catch (error) {
    console.error("updateMovie", error);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const id = +req.params.id;
    const deletedMovie = await prisma.movie.delete({
      where: {
        id,
      },
    });
    return res.status(200).send(deletedMovie);
  } catch (error) {
    console.error("deleteMovie", error);
  }
};
