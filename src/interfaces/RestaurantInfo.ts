interface SLA {
  slaString: string;
}

export interface RestaurantInfo {
  resData: {
    info: {
      name: string;
      avgRating: number;
      sla: SLA;
      cuisines: string[];
      areaName: string;
      cloudinaryImageId: string;
    };
  };
}

// export default RestaurantInfo;
