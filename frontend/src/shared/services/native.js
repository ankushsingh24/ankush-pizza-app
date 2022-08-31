const nativeOperations = {
  mic() {},
  gps(success, failure) {
    console.log("GPS Call Fn Start");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        success(pos);
      },
      (error) => {
        failure(error);
      }
    );
    console.log("GPS Call Fn End");
  },
};

export default nativeOperations;
