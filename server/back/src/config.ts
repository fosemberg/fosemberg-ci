import { Response } from 'express';
import { createMessageObject } from './configUtils';

export const DB_DIR = '../db';
export const DB_NAME = 'db.json';
export const DB_FULL_PATH = `${DB_DIR}/${DB_NAME}`;

export const PATH_TO_REPOS = 'repos';
export const PATH_TO_BACKUP = 'backup';

export enum MESSAGE {
  NO_ROUT = 'Rout not found.',
  NO_REPOSITORY = "Can't download repository with this url. Maybe we have already got repository with this name or url is not correct",
  REPOSITORY_DELETED = 'repository successfully deleted',
  REPOSITORY_CLONED = 'repository successfully cloned',
  CONNECTED = 'successfully conected'
}

export const RESPONSE = {
  NO_ROUT: (res: Response) => () =>
    res.status(404).json(createMessageObject(MESSAGE.NO_ROUT)),
  NO_REPOSITORY: (res: Response) => () =>
    res.status(500).json(createMessageObject(MESSAGE.NO_REPOSITORY)),
};
