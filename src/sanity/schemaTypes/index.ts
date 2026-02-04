import { type SchemaTypeDefinition } from 'sanity'
import { profile } from './profile'
import { achievement } from './achievement'
import { category } from './category'
import { experience } from './experience'
import { project } from './project'
import { skill } from './skill'
import { techStack } from './techStack'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    achievement,
    category,
    experience,
    profile,
    project,
    skill,
    techStack
  ],
}
