export interface IExperienceCardProps {
  experience: IExperience;
}
export interface IEducationCardProps {
  education: {
    instituteName: string;
    qulification: string;
    instituteLogo: string;
    startDate: string;
    endDate: string;
    grad: string;
    description: string;
    result: string;
    resultIcon: string;
  };
}
export interface ISkillCardProps {
  skill: ISkill;
}
export interface ISkill {
  name: string;
  skillSet: string[];
}

// Page Projects Types :
export interface IPorjectAllData {
  data: IProjectData;
  meta: IProjectDataPagination;
}

export interface IProjectData {
  id?: number;
  attributes: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    publishedAt: string;
    projectLink: string;
    githubLink: string;
    technology_stack: IProjectTechStack;
    preference: number;
    slug: string;
    skill_sets: {
      data: [
        {
          attributes: {
            name: string;
            logo: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
          };
        }
      ];
    };
    image: {
      data: [
        {
          id: number;
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
}
export interface IProjectDataPagination {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
export interface IProjectTechStack {
  data: [
    {
      id: number;
      attributes: {
        name: string;
      };
    }
  ];
}

//Page Experiences types :
export interface IExperience {
  role: string;
  companyName: string;
  companyLogo: string;
  fromDate: string;
  toDate: string;
  description: string;
  skills: skill[];
  certificate: string;
  docIcon: string;
}

export interface skill {
  name: string;
  logo: string;
}

export interface IBio {
  fullName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  whatsappLink: string;
  gmail: string;
  phone: string;
  skillPageHeading: string;
  experiencePageHeading: string;
  projectsPageHeading: string;
  educationPageHeading: string;
  contactPageHeading: string;
  bioHeading: string;
  resumePDF: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  myPhoto: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  myLogo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  my_roles: {
    data: [
      {
        attributes: {
          name: string;
        };
      }
    ];
  };
}

export interface ISkillData {
  id?: number;

  attributes: {
    skillName: string;

    createdAt: string;

    updatedAt: string;

    publishedAt: string;

    skill_sets: {
      data: [
        {
          id: 13;

          attributes: {
            name: string;

            createdAt: string;

            updatedAt: string;

            publishedAt: string;

            logo: {
              data: {
                attributes: { url: string };
              };
            };
          };
        }
      ];
    };
  };
}

export interface IPorjectData {
  id?: string;
  attributes: {
    name: string;
    description: string;
    githubLink: string;
    preference: number;
    projectLink: string;
    startDate: string;
    endDate: string;
    slug: string;
    image: {
      data: [
        {
          attributes: {
            name: string;
            url: string;
          };
        }
      ];
    };
    skill_sets: {
      data: [
        {
          attributes: {
            name: string;
            logo: {
              data: {
                attributes: { url: string };
              };
            };
          };
        }
      ];
    };
  };
}

export interface IEducationData {
  attributes: {
    instituteName: string;
    qualificationDegree: string;
    startDate: string;
    endDate: string;
    percentageGrade: string;
    description: string;
    instituteLogo: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    result: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    resultIcon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface IExpericenceData {
  attributes: {
    companyName: string;
    fromDate: string;
    toDate: string;
    description: string;
    skillset: {
      data: [
        {
          attributes: {
            name: string;
            logo: {
              data: {
                id: 14;
                attributes: {
                  url: string;
                };
              };
            };
          };
        }
      ];
    };
    role: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    companyLogo: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    certificate: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    docIcon: {
      data: {
        attributes: { url: string };
      };
    };
  };
}
export interface ISkillCard {
  name: string;
  skillSet: [{ name: string; logo: string }];
}

export interface IModalData {
  project: IProjectData;
  images: string[];
}
