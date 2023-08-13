export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000/',
    IMG_URL: 'http://localhost:3000',
    DESTINATION_BASE_URL: 'http://localhost:3000/destinations/',
    USER_BASE_URL: 'http://localhost:3000/users/',
    BOOKING_BASE_URL: 'http://localhost:3000/bookings/',
    DESTINATION:
    {   
        GET_ALL_DESTINATIONS: '/list',
        GET_DESTINATIONS: '/view',
        POST_DESTINATIONS: 'add',
        UPDATE_DESTINATIONS: 'update',
        SEARCH_DESTINATIONS: 'search',
        DELETE_DESTINATIONS: 'delete',
        UPLOAD_IMAGES: 'upload'
    },
    USER:
    {
        POST_USER: 'login'
    },
    BOOKING:
    {
        NEW_BOOKING: 'new',
        GET_ALL_BOOKINGS: 'listbookings'
    }

  };
  