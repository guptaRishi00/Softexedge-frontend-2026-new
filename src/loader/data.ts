import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layouts.header": {
          populate: {
            logoWhite: { fields: ["url", "name"] },
            logoBlue: { fields: ["url", "name"] },

            serviceDropdown: {
              populate: {
                links: {
                  populate: {
                    icon: { fields: ["url", "name"] },
                  },
                },
              },
            },
            comapnyDropdown: {
              populate: {
                links: {
                  populate: {
                    icon: { fields: ["url", "name"] },
                  },
                },
              },
            },
          },
        },
        "layouts.footer": {
          populate: {
            socials: {
              populate: {
                icon: { fields: ["url", "name"] },
              },
            },
            logo: {
              fields: ["url", "name"],
            },
          },
        },
      },
    },
  },
});

export async function getGlobalData() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const homepageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "homepage.herosection": {
          populate: {
            image: { fields: ["url", "name"] },
            titleImage: { fields: ["url", "name"] },
            letsTalk: true,
            viewServices: true,
          },
        },
        "homepage.brands": {
          populate: {
            logos: { fields: ["url", "name"] },
          },
        },
        "homepage.about-us": {
          populate: {
            image: {
              fields: ["url", "name"],
            },
            cta: true,
            counts: true,
          },
        },
        "homepage.video": {
          populate: {
            video: { fields: ["url", "name"] },
          },
        },
        "homepage.our-services": {
          populate: {
            cards: {
              populate: {
                images: { fields: ["url", "name"] },
                view: true,
                read: true,
              },
            },
          },
        },
        "homepage.why-softexedge": {
          populate: {
            image: {
              fields: ["url", "name"],
            },
            lists: true,
          },
        },
        "homepage.conversation": {
          populate: {
            card: {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
              },
            },
          },
        },
        "homepage.case-study": {
          populate: {
            cases: {
              populate: {
                logo: {
                  fields: ["url", "name"],
                },
                tags: true,
                image: {
                  fields: ["url", "name"],
                },
              },
            },
          },
        },
      },
    },
  },
});

export async function getHomepageData() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homepageQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },

    populate: {
      blocks: {
        on: {
          "shared.hero-section": {
            populate: {
              images: {
                fields: ["url", "name"],
              },
            },
          },
          "aboutpage.testimonial": {
            populate: {
              cards: true,
            },
          },
          "contactpage.questions": {
            populate: {
              list: {
                populate: {
                  cta: true,
                },
              },
            },
          },
          "shared.get-started": {
            populate: {
              letsTalk: true,
              viewWork: true,
            },
          },
          "aboutpage.about": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              cta: true,
            },
          },
          "aboutpage.impact": {
            populate: {
              counts: true,
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                  background: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "aboutpage.why-softexedge": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              cards: true,
            },
          },
          "aboutpage.our-team": {
            populate: {
              members: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "careerpage.hero-section": {
            populate: {
              images: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "careerpage.why-work": {
            populate: {
              lists: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "careerpage.find-career": {
            populate: {
              jobs: {
                populate: {
                  cta: true,
                },
              },
            },
          },
          "careerpage.journey": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "careerpage.culture": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "brandingpage.hero-section": {
            populate: {
              ctas: true,
              images: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "brandingpage.design": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              cta: true,
            },
          },
          "brandingpage.selected-works": {
            populate: {
              video: {
                fields: ["url", "name"],
              },
            },
          },
          "brandingpage.strategic-depth": {
            populate: {
              cards: {
                populate: {
                  bg: {
                    fields: ["url", "name"],
                  },
                  icon: {
                    fields: ["url", "name"],
                  },
                  tags: true,
                },
              },
            },
          },
          "brandingpage.testimonial": {
            populate: {
              cards: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "brandingpage.faq": {
            populate: {
              cards: {
                populate: true,
              },
            },
          },
          "uiux.hero-section": {
            populate: {
              ctas: true,
            },
          },
          "uiux.kinetic-process": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "uiux.selected-works": {
            populate: {
              cards: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                  tags: true,
                },
              },
            },
          },
          "video.hero-section": {
            populate: {
              bg: {
                fields: ["url", "name"],
              },
              ctas: true,
            },
          },
          "video.blueprint": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "video.global-views": {
            populate: {
              modules: true,
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "video.video": {
            populate: {
              video: {
                fields: ["url", "name"],
              },
            },
          },
          "software.enterprise": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                }
              }
            }
          },
          "software.tech-stack": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"]
                  }
                }
              }
            }
          },
          "web.framework": {
            populate: {
              lists: {
                populate: {
                  icon: {
                    fields: ["url", "name"]
                  }
                }
              },
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"]
                  }
                }
              }
            }
          },
          "web.our-process": {
            populate: {
              cards: true
            }
          },
          "app.app-stack": {
            populate: {
              cards: true
            }
          },
          "app.our-development": {
            populate: {
              cards: true
            }
          },
          "casestudy.featured": {
            populate: {
              cards: {
                populate: {
                  image: {
                    fields: ["url", "name"]
                  },
                  funding: true,
                  downloads: true
                }
              }
            }
          },
          "casestudy.showcase": {
            populate: {
              image: {
                populate: {
                  image: {
                    fields: ["url", "name"]
                  }
                }
              }
            }
          },
          "casestudy.more-cases": {
            populate: {
              cards: {
                populate: {
                  image: {
                    fields: ["url", "name"]
                  },

                }
              }
            }
          }
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, {
    method: "GET",
  });
}
