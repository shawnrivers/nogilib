import { UnitRaw } from 'db/src/actors/Units/models';

type CreateUnitRawParams = {
  name: UnitRaw['name'];
  members: UnitRaw['members'];
  type: UnitRaw['type'];
  description?: UnitRaw['description'];
};

export const createUnitRaw = (params: CreateUnitRawParams): UnitRaw => {
  return {
    name: params.name,
    members: params.members,
    type: params.type,
    description: params.description ?? '',
  };
};
