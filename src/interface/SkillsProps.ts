export interface SkillsProps {
  newSkill: string;
  setNewSkill: React.Dispatch<React.SetStateAction<string>>;
  addSkill: () => void;
  deleteSkill: (index: number) => void;
  skills: string[]; 
}
