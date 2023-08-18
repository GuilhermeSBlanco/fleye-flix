import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const path = useNavigate()

    return (
        <footer>
                <Link to="/" >
                { path.location == '/' 
                  ? <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="64" fill="#111111"/>
                  <path d="M33 31V21H39V31M27 18L36 11L45 18V29C45 29.5304 44.7893 30.0391 44.4142 30.4142C44.0391 30.7893 43.5304 31 43 31H29C28.4696 31 27.9609 30.7893 27.5858 30.4142C27.2107 30.0391 27 29.5304 27 29V18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.0662 50V41.2727H21.383V45.0653H25.7338V41.2727H27.0549V50H25.7338V46.1946H21.383V50H20.0662ZM31.6273 50.1321C31.0137 50.1321 30.4782 49.9915 30.0208 49.7102C29.5634 49.429 29.2083 49.0355 28.9554 48.5298C28.7026 48.0241 28.5762 47.4332 28.5762 46.7571C28.5762 46.0781 28.7026 45.4844 28.9554 44.9759C29.2083 44.4673 29.5634 44.0724 30.0208 43.7912C30.4782 43.5099 31.0137 43.3693 31.6273 43.3693C32.2409 43.3693 32.7765 43.5099 33.2338 43.7912C33.6912 44.0724 34.0463 44.4673 34.2992 44.9759C34.552 45.4844 34.6784 46.0781 34.6784 46.7571C34.6784 47.4332 34.552 48.0241 34.2992 48.5298C34.0463 49.0355 33.6912 49.429 33.2338 49.7102C32.7765 49.9915 32.2409 50.1321 31.6273 50.1321ZM31.6316 49.0625C32.0293 49.0625 32.3588 48.9574 32.6202 48.7472C32.8816 48.5369 33.0748 48.2571 33.1998 47.9077C33.3276 47.5582 33.3915 47.1733 33.3915 46.7528C33.3915 46.3352 33.3276 45.9517 33.1998 45.6023C33.0748 45.25 32.8816 44.9673 32.6202 44.7543C32.3588 44.5412 32.0293 44.4347 31.6316 44.4347C31.231 44.4347 30.8986 44.5412 30.6344 44.7543C30.373 44.9673 30.1784 45.25 30.0506 45.6023C29.9256 45.9517 29.8631 46.3352 29.8631 46.7528C29.8631 47.1733 29.9256 47.5582 30.0506 47.9077C30.1784 48.2571 30.373 48.5369 30.6344 48.7472C30.8986 48.9574 31.231 49.0625 31.6316 49.0625ZM36.1007 50V43.4545H37.3237V44.5199H37.4047C37.541 44.1591 37.764 43.8778 38.0737 43.6761C38.3833 43.4716 38.7541 43.3693 39.1859 43.3693C39.6234 43.3693 39.9899 43.4716 40.2853 43.6761C40.5836 43.8807 40.8038 44.1619 40.9458 44.5199H41.014C41.1703 44.1705 41.4189 43.892 41.7598 43.6847C42.1007 43.4744 42.5069 43.3693 42.9785 43.3693C43.5723 43.3693 44.0566 43.5554 44.4316 43.9276C44.8095 44.2997 44.9984 44.8608 44.9984 45.6108V50H43.7243V45.7301C43.7243 45.2869 43.6035 44.9659 43.362 44.767C43.1206 44.5682 42.8322 44.4688 42.497 44.4688C42.0822 44.4688 41.7598 44.5966 41.5297 44.8523C41.2995 45.1051 41.1845 45.4304 41.1845 45.8281V50H39.9146V45.6491C39.9146 45.294 39.8038 45.0085 39.5822 44.7926C39.3606 44.5767 39.0723 44.4688 38.7172 44.4688C38.4757 44.4688 38.2527 44.5327 38.0481 44.6605C37.8464 44.7855 37.6831 44.9602 37.5581 45.1847C37.4359 45.4091 37.3748 45.669 37.3748 45.9645V50H36.1007ZM49.5272 50.1321C48.8823 50.1321 48.3269 49.9943 47.861 49.7188C47.3979 49.4403 47.04 49.0497 46.7871 48.5469C46.5371 48.0412 46.4121 47.4489 46.4121 46.7699C46.4121 46.0994 46.5371 45.5085 46.7871 44.9972C47.04 44.4858 47.3922 44.0866 47.8439 43.7997C48.2985 43.5128 48.8297 43.3693 49.4377 43.3693C49.807 43.3693 50.165 43.4304 50.5115 43.5526C50.8581 43.6747 51.1692 43.8665 51.4448 44.1278C51.7203 44.3892 51.9377 44.7287 52.0968 45.1463C52.2559 45.5611 52.3354 46.0653 52.3354 46.6591V47.1108H47.1323V46.1562H51.0868C51.0868 45.821 51.0186 45.5241 50.8823 45.2656C50.7459 45.0043 50.5542 44.7983 50.307 44.6477C50.0627 44.4972 49.7757 44.4219 49.4462 44.4219C49.0882 44.4219 48.7757 44.5099 48.5087 44.6861C48.2445 44.8594 48.04 45.0866 47.8951 45.3679C47.753 45.6463 47.682 45.9489 47.682 46.2756V47.0213C47.682 47.4588 47.7587 47.831 47.9121 48.1378C48.0684 48.4446 48.2857 48.679 48.5641 48.8409C48.8425 49 49.1678 49.0795 49.54 49.0795C49.7814 49.0795 50.0016 49.0455 50.2005 48.9773C50.3993 48.9062 50.5712 48.8011 50.7161 48.6619C50.861 48.5227 50.9718 48.3509 51.0485 48.1463L52.2544 48.3636C52.1578 48.7187 51.9846 49.0298 51.7346 49.2969C51.4874 49.5611 51.1763 49.767 50.8013 49.9148C50.4292 50.0597 50.0044 50.1321 49.5272 50.1321Z" fill="white"/>
                  </svg>
                  
                  : <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="64" fill="#111111"/>
                  <path d="M33 31V21H39V31M27 18L36 11L45 18V29C45 29.5304 44.7893 30.0391 44.4142 30.4142C44.0391 30.7893 43.5304 31 43 31H29C28.4696 31 27.9609 30.7893 27.5858 30.4142C27.2107 30.0391 27 29.5304 27 29V18Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.0662 50V41.2727H21.383V45.0653H25.7338V41.2727H27.0549V50H25.7338V46.1946H21.383V50H20.0662ZM31.6273 50.1321C31.0137 50.1321 30.4782 49.9915 30.0208 49.7102C29.5634 49.429 29.2083 49.0355 28.9554 48.5298C28.7026 48.0241 28.5762 47.4332 28.5762 46.7571C28.5762 46.0781 28.7026 45.4844 28.9554 44.9759C29.2083 44.4673 29.5634 44.0724 30.0208 43.7912C30.4782 43.5099 31.0137 43.3693 31.6273 43.3693C32.2409 43.3693 32.7765 43.5099 33.2338 43.7912C33.6912 44.0724 34.0463 44.4673 34.2992 44.9759C34.552 45.4844 34.6784 46.0781 34.6784 46.7571C34.6784 47.4332 34.552 48.0241 34.2992 48.5298C34.0463 49.0355 33.6912 49.429 33.2338 49.7102C32.7765 49.9915 32.2409 50.1321 31.6273 50.1321ZM31.6316 49.0625C32.0293 49.0625 32.3588 48.9574 32.6202 48.7472C32.8816 48.5369 33.0748 48.2571 33.1998 47.9077C33.3276 47.5582 33.3915 47.1733 33.3915 46.7528C33.3915 46.3352 33.3276 45.9517 33.1998 45.6023C33.0748 45.25 32.8816 44.9673 32.6202 44.7543C32.3588 44.5412 32.0293 44.4347 31.6316 44.4347C31.231 44.4347 30.8986 44.5412 30.6344 44.7543C30.373 44.9673 30.1784 45.25 30.0506 45.6023C29.9256 45.9517 29.8631 46.3352 29.8631 46.7528C29.8631 47.1733 29.9256 47.5582 30.0506 47.9077C30.1784 48.2571 30.373 48.5369 30.6344 48.7472C30.8986 48.9574 31.231 49.0625 31.6316 49.0625ZM36.1007 50V43.4545H37.3237V44.5199H37.4047C37.541 44.1591 37.764 43.8778 38.0737 43.6761C38.3833 43.4716 38.7541 43.3693 39.1859 43.3693C39.6234 43.3693 39.9899 43.4716 40.2853 43.6761C40.5836 43.8807 40.8038 44.1619 40.9458 44.5199H41.014C41.1703 44.1705 41.4189 43.892 41.7598 43.6847C42.1007 43.4744 42.5069 43.3693 42.9785 43.3693C43.5723 43.3693 44.0566 43.5554 44.4316 43.9276C44.8095 44.2997 44.9984 44.8608 44.9984 45.6108V50H43.7243V45.7301C43.7243 45.2869 43.6035 44.9659 43.362 44.767C43.1206 44.5682 42.8322 44.4688 42.497 44.4688C42.0822 44.4688 41.7598 44.5966 41.5297 44.8523C41.2995 45.1051 41.1845 45.4304 41.1845 45.8281V50H39.9146V45.6491C39.9146 45.294 39.8038 45.0085 39.5822 44.7926C39.3606 44.5767 39.0723 44.4688 38.7172 44.4688C38.4757 44.4688 38.2527 44.5327 38.0481 44.6605C37.8464 44.7855 37.6831 44.9602 37.5581 45.1847C37.4359 45.4091 37.3748 45.669 37.3748 45.9645V50H36.1007ZM49.5272 50.1321C48.8823 50.1321 48.3269 49.9943 47.861 49.7188C47.3979 49.4403 47.04 49.0497 46.7871 48.5469C46.5371 48.0412 46.4121 47.4489 46.4121 46.7699C46.4121 46.0994 46.5371 45.5085 46.7871 44.9972C47.04 44.4858 47.3922 44.0866 47.8439 43.7997C48.2985 43.5128 48.8297 43.3693 49.4377 43.3693C49.807 43.3693 50.165 43.4304 50.5115 43.5526C50.8581 43.6747 51.1692 43.8665 51.4448 44.1278C51.7203 44.3892 51.9377 44.7287 52.0968 45.1463C52.2559 45.5611 52.3354 46.0653 52.3354 46.6591V47.1108H47.1323V46.1562H51.0868C51.0868 45.821 51.0186 45.5241 50.8823 45.2656C50.7459 45.0043 50.5542 44.7983 50.307 44.6477C50.0627 44.4972 49.7757 44.4219 49.4462 44.4219C49.0882 44.4219 48.7757 44.5099 48.5087 44.6861C48.2445 44.8594 48.04 45.0866 47.8951 45.3679C47.753 45.6463 47.682 45.9489 47.682 46.2756V47.0213C47.682 47.4588 47.7587 47.831 47.9121 48.1378C48.0684 48.4446 48.2857 48.679 48.5641 48.8409C48.8425 49 49.1678 49.0795 49.54 49.0795C49.7814 49.0795 50.0016 49.0455 50.2005 48.9773C50.3993 48.9062 50.5712 48.8011 50.7161 48.6619C50.861 48.5227 50.9718 48.3509 51.0485 48.1463L52.2544 48.3636C52.1578 48.7187 51.9846 49.0298 51.7346 49.2969C51.4874 49.5611 51.1763 49.767 50.8013 49.9148C50.4292 50.0597 50.0044 50.1321 49.5272 50.1321Z" fill="#555555"/>
                  </svg>
                }
                </Link>

                <Link to="/fav" >
                    { path.location == '/fav' 
                      ? <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="72" height="64" fill="#111111"/>
                      <path d="M44.8401 13.61C44.3294 13.099 43.7229 12.6936 43.0555 12.4171C42.388 12.1405 41.6726 11.9982 40.9501 11.9982C40.2276 11.9982 39.5122 12.1405 38.8448 12.4171C38.1773 12.6936 37.5709 13.099 37.0601 13.61L36.0001 14.67L34.9401 13.61C33.9084 12.5783 32.5092 11.9987 31.0501 11.9987C29.5911 11.9987 28.1918 12.5783 27.1601 13.61C26.1284 14.6417 25.5488 16.041 25.5488 17.5C25.5488 18.959 26.1284 20.3583 27.1601 21.39L28.2201 22.45L36.0001 30.23L43.7801 22.45L44.8401 21.39C45.3511 20.8792 45.7565 20.2728 46.033 19.6053C46.3096 18.9379 46.4519 18.2225 46.4519 17.5C46.4519 16.7775 46.3096 16.0621 46.033 15.3946C45.7565 14.7272 45.3511 14.1208 44.8401 13.61V13.61Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.5213 50V41.2727H15.9332V42.4062H11.8381V45.0653H15.5455V46.1946H11.8381V50H10.5213ZM19.3317 50.1449C18.9169 50.1449 18.5419 50.0682 18.2067 49.9148C17.8714 49.7585 17.6058 49.5327 17.4098 49.2372C17.2166 48.9418 17.12 48.5795 17.12 48.1506C17.12 47.7812 17.1911 47.4773 17.3331 47.2386C17.4751 47 17.6669 46.8111 17.9084 46.6719C18.1499 46.5327 18.4197 46.4276 18.718 46.3565C19.0163 46.2855 19.3203 46.2315 19.63 46.1946C20.022 46.1491 20.3402 46.1122 20.5845 46.0838C20.8288 46.0526 21.0064 46.0028 21.1172 45.9347C21.228 45.8665 21.2834 45.7557 21.2834 45.6023V45.5724C21.2834 45.2003 21.1783 44.9119 20.968 44.7074C20.7607 44.5028 20.451 44.4006 20.0391 44.4006C19.6101 44.4006 19.272 44.4957 19.0249 44.6861C18.7805 44.8736 18.6115 45.0824 18.5178 45.3125L17.3203 45.0398C17.4624 44.642 17.6697 44.321 17.9425 44.0767C18.218 43.8295 18.5348 43.6506 18.8928 43.5398C19.2507 43.4261 19.6271 43.3693 20.022 43.3693C20.2834 43.3693 20.5604 43.4006 20.853 43.4631C21.1484 43.5227 21.424 43.6335 21.6797 43.7955C21.9382 43.9574 22.1499 44.1889 22.3146 44.4901C22.4794 44.7884 22.5618 45.1761 22.5618 45.6534V50H21.3175V49.1051H21.2663C21.1839 49.2699 21.0604 49.4318 20.8956 49.5909C20.7308 49.75 20.5192 49.8821 20.2607 49.9872C20.0021 50.0923 19.6925 50.1449 19.3317 50.1449ZM19.6087 49.1222C19.9609 49.1222 20.2621 49.0526 20.5121 48.9134C20.7649 48.7741 20.9567 48.5923 21.0874 48.3679C21.2209 48.1406 21.2876 47.8977 21.2876 47.6392V46.7955C21.2422 46.8409 21.1541 46.8835 21.0234 46.9233C20.8956 46.9602 20.7493 46.9929 20.5845 47.0213C20.4197 47.0469 20.2592 47.071 20.103 47.0938C19.9467 47.1136 19.8161 47.1307 19.7109 47.1449C19.4638 47.1761 19.2379 47.2287 19.0334 47.3026C18.8317 47.3764 18.6697 47.483 18.5476 47.6222C18.4283 47.7585 18.3686 47.9403 18.3686 48.1676C18.3686 48.483 18.4851 48.7216 18.718 48.8835C18.951 49.0426 19.2479 49.1222 19.6087 49.1222ZM29.6239 43.4545L27.2504 50H25.8867L23.5089 43.4545H24.8768L26.5344 48.4915H26.6026L28.256 43.4545H29.6239ZM33.3558 50.1321C32.7422 50.1321 32.2067 49.9915 31.7493 49.7102C31.2919 49.429 30.9368 49.0355 30.6839 48.5298C30.4311 48.0241 30.3047 47.4332 30.3047 46.7571C30.3047 46.0781 30.4311 45.4844 30.6839 44.9759C30.9368 44.4673 31.2919 44.0724 31.7493 43.7912C32.2067 43.5099 32.7422 43.3693 33.3558 43.3693C33.9695 43.3693 34.505 43.5099 34.9624 43.7912C35.4197 44.0724 35.7749 44.4673 36.0277 44.9759C36.2805 45.4844 36.407 46.0781 36.407 46.7571C36.407 47.4332 36.2805 48.0241 36.0277 48.5298C35.7749 49.0355 35.4197 49.429 34.9624 49.7102C34.505 49.9915 33.9695 50.1321 33.3558 50.1321ZM33.3601 49.0625C33.7578 49.0625 34.0874 48.9574 34.3487 48.7472C34.6101 48.5369 34.8033 48.2571 34.9283 47.9077C35.0561 47.5582 35.12 47.1733 35.12 46.7528C35.12 46.3352 35.0561 45.9517 34.9283 45.6023C34.8033 45.25 34.6101 44.9673 34.3487 44.7543C34.0874 44.5412 33.7578 44.4347 33.3601 44.4347C32.9595 44.4347 32.6271 44.5412 32.3629 44.7543C32.1016 44.9673 31.907 45.25 31.7791 45.6023C31.6541 45.9517 31.5916 46.3352 31.5916 46.7528C31.5916 47.1733 31.6541 47.5582 31.7791 47.9077C31.907 48.2571 32.1016 48.5369 32.3629 48.7472C32.6271 48.9574 32.9595 49.0625 33.3601 49.0625ZM37.8292 50V43.4545H39.0607V44.4943H39.1289C39.2482 44.142 39.4585 43.8651 39.7596 43.6634C40.0636 43.4588 40.4073 43.3565 40.7908 43.3565C40.8704 43.3565 40.9641 43.3594 41.0721 43.3651C41.1829 43.3707 41.2695 43.3778 41.332 43.3864V44.6051C41.2809 44.5909 41.19 44.5753 41.0593 44.5582C40.9286 44.5384 40.7979 44.5284 40.6673 44.5284C40.3661 44.5284 40.0977 44.5923 39.8619 44.7202C39.6289 44.8452 39.4442 45.0199 39.3079 45.2443C39.1715 45.4659 39.1033 45.7187 39.1033 46.0028V50H37.8292ZM42.4347 50V43.4545H43.7088V50H42.4347ZM43.0781 42.4446C42.8565 42.4446 42.6662 42.3707 42.5071 42.223C42.3509 42.0724 42.2727 41.8935 42.2727 41.6861C42.2727 41.4759 42.3509 41.2969 42.5071 41.1491C42.6662 40.9986 42.8565 40.9233 43.0781 40.9233C43.2997 40.9233 43.4886 40.9986 43.6449 41.1491C43.804 41.2969 43.8835 41.4759 43.8835 41.6861C43.8835 41.8935 43.804 42.0724 43.6449 42.223C43.4886 42.3707 43.2997 42.4446 43.0781 42.4446ZM48.4783 43.4545V44.4773H44.9031V43.4545H48.4783ZM45.8619 41.8864H47.136V48.0781C47.136 48.3253 47.1729 48.5114 47.2468 48.6364C47.3207 48.7585 47.4158 48.8423 47.5323 48.8878C47.6516 48.9304 47.7809 48.9517 47.9201 48.9517C48.0224 48.9517 48.1119 48.9446 48.1886 48.9304C48.2653 48.9162 48.3249 48.9048 48.3675 48.8963L48.5977 49.9489C48.5238 49.9773 48.4187 50.0057 48.2823 50.0341C48.146 50.0653 47.9755 50.0824 47.771 50.0852C47.4357 50.0909 47.1232 50.0312 46.8335 49.9062C46.5437 49.7812 46.3093 49.5881 46.1303 49.3267C45.9513 49.0653 45.8619 48.7372 45.8619 48.3423V41.8864ZM52.6385 50.1321C51.9936 50.1321 51.4382 49.9943 50.9723 49.7188C50.5092 49.4403 50.1513 49.0497 49.8984 48.5469C49.6484 48.0412 49.5234 47.4489 49.5234 46.7699C49.5234 46.0994 49.6484 45.5085 49.8984 44.9972C50.1513 44.4858 50.5036 44.0866 50.9553 43.7997C51.4098 43.5128 51.9411 43.3693 52.549 43.3693C52.9183 43.3693 53.2763 43.4304 53.6229 43.5526C53.9695 43.6747 54.2805 43.8665 54.5561 44.1278C54.8317 44.3892 55.049 44.7287 55.2081 45.1463C55.3672 45.5611 55.4467 46.0653 55.4467 46.6591V47.1108H50.2436V46.1562H54.1982C54.1982 45.821 54.13 45.5241 53.9936 45.2656C53.8572 45.0043 53.6655 44.7983 53.4183 44.6477C53.174 44.4972 52.8871 44.4219 52.5575 44.4219C52.1996 44.4219 51.8871 44.5099 51.62 44.6861C51.3558 44.8594 51.1513 45.0866 51.0064 45.3679C50.8643 45.6463 50.7933 45.9489 50.7933 46.2756V47.0213C50.7933 47.4588 50.87 47.831 51.0234 48.1378C51.1797 48.4446 51.397 48.679 51.6754 48.8409C51.9538 49 52.2791 49.0795 52.6513 49.0795C52.8928 49.0795 53.1129 49.0455 53.3118 48.9773C53.5107 48.9062 53.6825 48.8011 53.8274 48.6619C53.9723 48.5227 54.0831 48.3509 54.1598 48.1463L55.3658 48.3636C55.2692 48.7187 55.0959 49.0298 54.8459 49.2969C54.5987 49.5611 54.2876 49.767 53.9126 49.9148C53.5405 50.0597 53.1158 50.1321 52.6385 50.1321ZM61.7653 45.0526L60.6104 45.2571C60.5621 45.1094 60.4854 44.9687 60.3803 44.8352C60.2781 44.7017 60.1388 44.5923 59.9627 44.5071C59.7866 44.4219 59.5664 44.3793 59.3022 44.3793C58.9414 44.3793 58.6403 44.4602 58.3988 44.6222C58.1573 44.7812 58.0366 44.9872 58.0366 45.2401C58.0366 45.4588 58.1175 45.6349 58.2795 45.7685C58.4414 45.902 58.7028 46.0114 59.0636 46.0966L60.1033 46.3352C60.7056 46.4744 61.1545 46.6889 61.4499 46.9787C61.7454 47.2685 61.8931 47.6449 61.8931 48.108C61.8931 48.5 61.7795 48.8494 61.5522 49.1562C61.3278 49.4602 61.0138 49.6989 60.6104 49.8722C60.2099 50.0455 59.7454 50.1321 59.217 50.1321C58.484 50.1321 57.886 49.9759 57.4229 49.6634C56.9599 49.348 56.6758 48.9006 56.5707 48.321L57.8022 48.1335C57.8789 48.4545 58.0366 48.6974 58.2752 48.8622C58.5138 49.0241 58.8249 49.1051 59.2085 49.1051C59.6261 49.1051 59.9599 49.0185 60.2099 48.8452C60.4599 48.669 60.5849 48.4545 60.5849 48.2017C60.5849 47.9972 60.5082 47.8253 60.3548 47.6861C60.2042 47.5469 59.9727 47.4418 59.6602 47.3707L58.5522 47.1278C57.9414 46.9886 57.4897 46.767 57.1971 46.4631C56.9073 46.1591 56.7624 45.7741 56.7624 45.3082C56.7624 44.9219 56.8704 44.5838 57.0863 44.294C57.3022 44.0043 57.6005 43.7784 57.9812 43.6165C58.3619 43.4517 58.7979 43.3693 59.2894 43.3693C59.9968 43.3693 60.5536 43.5227 60.9599 43.8295C61.3661 44.1335 61.6346 44.5412 61.7653 45.0526Z" fill="white"/>
                      </svg>
                                      
                      : <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="72" height="64" fill="#111111"/>
                      <path d="M44.8401 13.61C44.3294 13.099 43.7229 12.6936 43.0555 12.4171C42.388 12.1405 41.6726 11.9982 40.9501 11.9982C40.2276 11.9982 39.5122 12.1405 38.8448 12.4171C38.1773 12.6936 37.5709 13.099 37.0601 13.61L36.0001 14.67L34.9401 13.61C33.9084 12.5783 32.5092 11.9987 31.0501 11.9987C29.5911 11.9987 28.1918 12.5783 27.1601 13.61C26.1284 14.6417 25.5488 16.041 25.5488 17.5C25.5488 18.959 26.1284 20.3583 27.1601 21.39L28.2201 22.45L36.0001 30.23L43.7801 22.45L44.8401 21.39C45.3511 20.8792 45.7565 20.2728 46.033 19.6053C46.3096 18.9379 46.4519 18.2225 46.4519 17.5C46.4519 16.7775 46.3096 16.0621 46.033 15.3946C45.7565 14.7272 45.3511 14.1208 44.8401 13.61V13.61Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.5213 50V41.2727H15.9332V42.4062H11.8381V45.0653H15.5455V46.1946H11.8381V50H10.5213ZM19.3317 50.1449C18.9169 50.1449 18.5419 50.0682 18.2067 49.9148C17.8714 49.7585 17.6058 49.5327 17.4098 49.2372C17.2166 48.9418 17.12 48.5795 17.12 48.1506C17.12 47.7812 17.1911 47.4773 17.3331 47.2386C17.4751 47 17.6669 46.8111 17.9084 46.6719C18.1499 46.5327 18.4197 46.4276 18.718 46.3565C19.0163 46.2855 19.3203 46.2315 19.63 46.1946C20.022 46.1491 20.3402 46.1122 20.5845 46.0838C20.8288 46.0526 21.0064 46.0028 21.1172 45.9347C21.228 45.8665 21.2834 45.7557 21.2834 45.6023V45.5724C21.2834 45.2003 21.1783 44.9119 20.968 44.7074C20.7607 44.5028 20.451 44.4006 20.0391 44.4006C19.6101 44.4006 19.272 44.4957 19.0249 44.6861C18.7805 44.8736 18.6115 45.0824 18.5178 45.3125L17.3203 45.0398C17.4624 44.642 17.6697 44.321 17.9425 44.0767C18.218 43.8295 18.5348 43.6506 18.8928 43.5398C19.2507 43.4261 19.6271 43.3693 20.022 43.3693C20.2834 43.3693 20.5604 43.4006 20.853 43.4631C21.1484 43.5227 21.424 43.6335 21.6797 43.7955C21.9382 43.9574 22.1499 44.1889 22.3146 44.4901C22.4794 44.7884 22.5618 45.1761 22.5618 45.6534V50H21.3175V49.1051H21.2663C21.1839 49.2699 21.0604 49.4318 20.8956 49.5909C20.7308 49.75 20.5192 49.8821 20.2607 49.9872C20.0021 50.0923 19.6925 50.1449 19.3317 50.1449ZM19.6087 49.1222C19.9609 49.1222 20.2621 49.0526 20.5121 48.9134C20.7649 48.7741 20.9567 48.5923 21.0874 48.3679C21.2209 48.1406 21.2876 47.8977 21.2876 47.6392V46.7955C21.2422 46.8409 21.1541 46.8835 21.0234 46.9233C20.8956 46.9602 20.7493 46.9929 20.5845 47.0213C20.4197 47.0469 20.2592 47.071 20.103 47.0938C19.9467 47.1136 19.8161 47.1307 19.7109 47.1449C19.4638 47.1761 19.2379 47.2287 19.0334 47.3026C18.8317 47.3764 18.6697 47.483 18.5476 47.6222C18.4283 47.7585 18.3686 47.9403 18.3686 48.1676C18.3686 48.483 18.4851 48.7216 18.718 48.8835C18.951 49.0426 19.2479 49.1222 19.6087 49.1222ZM29.6239 43.4545L27.2504 50H25.8867L23.5089 43.4545H24.8768L26.5344 48.4915H26.6026L28.256 43.4545H29.6239ZM33.3558 50.1321C32.7422 50.1321 32.2067 49.9915 31.7493 49.7102C31.2919 49.429 30.9368 49.0355 30.6839 48.5298C30.4311 48.0241 30.3047 47.4332 30.3047 46.7571C30.3047 46.0781 30.4311 45.4844 30.6839 44.9759C30.9368 44.4673 31.2919 44.0724 31.7493 43.7912C32.2067 43.5099 32.7422 43.3693 33.3558 43.3693C33.9695 43.3693 34.505 43.5099 34.9624 43.7912C35.4197 44.0724 35.7749 44.4673 36.0277 44.9759C36.2805 45.4844 36.407 46.0781 36.407 46.7571C36.407 47.4332 36.2805 48.0241 36.0277 48.5298C35.7749 49.0355 35.4197 49.429 34.9624 49.7102C34.505 49.9915 33.9695 50.1321 33.3558 50.1321ZM33.3601 49.0625C33.7578 49.0625 34.0874 48.9574 34.3487 48.7472C34.6101 48.5369 34.8033 48.2571 34.9283 47.9077C35.0561 47.5582 35.12 47.1733 35.12 46.7528C35.12 46.3352 35.0561 45.9517 34.9283 45.6023C34.8033 45.25 34.6101 44.9673 34.3487 44.7543C34.0874 44.5412 33.7578 44.4347 33.3601 44.4347C32.9595 44.4347 32.6271 44.5412 32.3629 44.7543C32.1016 44.9673 31.907 45.25 31.7791 45.6023C31.6541 45.9517 31.5916 46.3352 31.5916 46.7528C31.5916 47.1733 31.6541 47.5582 31.7791 47.9077C31.907 48.2571 32.1016 48.5369 32.3629 48.7472C32.6271 48.9574 32.9595 49.0625 33.3601 49.0625ZM37.8292 50V43.4545H39.0607V44.4943H39.1289C39.2482 44.142 39.4585 43.8651 39.7596 43.6634C40.0636 43.4588 40.4073 43.3565 40.7908 43.3565C40.8704 43.3565 40.9641 43.3594 41.0721 43.3651C41.1829 43.3707 41.2695 43.3778 41.332 43.3864V44.6051C41.2809 44.5909 41.19 44.5753 41.0593 44.5582C40.9286 44.5384 40.7979 44.5284 40.6673 44.5284C40.3661 44.5284 40.0977 44.5923 39.8619 44.7202C39.6289 44.8452 39.4442 45.0199 39.3079 45.2443C39.1715 45.4659 39.1033 45.7187 39.1033 46.0028V50H37.8292ZM42.4347 50V43.4545H43.7088V50H42.4347ZM43.0781 42.4446C42.8565 42.4446 42.6662 42.3707 42.5071 42.223C42.3509 42.0724 42.2727 41.8935 42.2727 41.6861C42.2727 41.4759 42.3509 41.2969 42.5071 41.1491C42.6662 40.9986 42.8565 40.9233 43.0781 40.9233C43.2997 40.9233 43.4886 40.9986 43.6449 41.1491C43.804 41.2969 43.8835 41.4759 43.8835 41.6861C43.8835 41.8935 43.804 42.0724 43.6449 42.223C43.4886 42.3707 43.2997 42.4446 43.0781 42.4446ZM48.4783 43.4545V44.4773H44.9031V43.4545H48.4783ZM45.8619 41.8864H47.136V48.0781C47.136 48.3253 47.1729 48.5114 47.2468 48.6364C47.3207 48.7585 47.4158 48.8423 47.5323 48.8878C47.6516 48.9304 47.7809 48.9517 47.9201 48.9517C48.0224 48.9517 48.1119 48.9446 48.1886 48.9304C48.2653 48.9162 48.3249 48.9048 48.3675 48.8963L48.5977 49.9489C48.5238 49.9773 48.4187 50.0057 48.2823 50.0341C48.146 50.0653 47.9755 50.0824 47.771 50.0852C47.4357 50.0909 47.1232 50.0312 46.8335 49.9062C46.5437 49.7812 46.3093 49.5881 46.1303 49.3267C45.9513 49.0653 45.8619 48.7372 45.8619 48.3423V41.8864ZM52.6385 50.1321C51.9936 50.1321 51.4382 49.9943 50.9723 49.7188C50.5092 49.4403 50.1513 49.0497 49.8984 48.5469C49.6484 48.0412 49.5234 47.4489 49.5234 46.7699C49.5234 46.0994 49.6484 45.5085 49.8984 44.9972C50.1513 44.4858 50.5036 44.0866 50.9553 43.7997C51.4098 43.5128 51.9411 43.3693 52.549 43.3693C52.9183 43.3693 53.2763 43.4304 53.6229 43.5526C53.9695 43.6747 54.2805 43.8665 54.5561 44.1278C54.8317 44.3892 55.049 44.7287 55.2081 45.1463C55.3672 45.5611 55.4467 46.0653 55.4467 46.6591V47.1108H50.2436V46.1562H54.1982C54.1982 45.821 54.13 45.5241 53.9936 45.2656C53.8572 45.0043 53.6655 44.7983 53.4183 44.6477C53.174 44.4972 52.8871 44.4219 52.5575 44.4219C52.1996 44.4219 51.8871 44.5099 51.62 44.6861C51.3558 44.8594 51.1513 45.0866 51.0064 45.3679C50.8643 45.6463 50.7933 45.9489 50.7933 46.2756V47.0213C50.7933 47.4588 50.87 47.831 51.0234 48.1378C51.1797 48.4446 51.397 48.679 51.6754 48.8409C51.9538 49 52.2791 49.0795 52.6513 49.0795C52.8928 49.0795 53.1129 49.0455 53.3118 48.9773C53.5107 48.9062 53.6825 48.8011 53.8274 48.6619C53.9723 48.5227 54.0831 48.3509 54.1598 48.1463L55.3658 48.3636C55.2692 48.7187 55.0959 49.0298 54.8459 49.2969C54.5987 49.5611 54.2876 49.767 53.9126 49.9148C53.5405 50.0597 53.1158 50.1321 52.6385 50.1321ZM61.7653 45.0526L60.6104 45.2571C60.5621 45.1094 60.4854 44.9687 60.3803 44.8352C60.2781 44.7017 60.1388 44.5923 59.9627 44.5071C59.7866 44.4219 59.5664 44.3793 59.3022 44.3793C58.9414 44.3793 58.6403 44.4602 58.3988 44.6222C58.1573 44.7812 58.0366 44.9872 58.0366 45.2401C58.0366 45.4588 58.1175 45.6349 58.2795 45.7685C58.4414 45.902 58.7028 46.0114 59.0636 46.0966L60.1033 46.3352C60.7056 46.4744 61.1545 46.6889 61.4499 46.9787C61.7454 47.2685 61.8931 47.6449 61.8931 48.108C61.8931 48.5 61.7795 48.8494 61.5522 49.1562C61.3278 49.4602 61.0138 49.6989 60.6104 49.8722C60.2099 50.0455 59.7454 50.1321 59.217 50.1321C58.484 50.1321 57.886 49.9759 57.4229 49.6634C56.9599 49.348 56.6758 48.9006 56.5707 48.321L57.8022 48.1335C57.8789 48.4545 58.0366 48.6974 58.2752 48.8622C58.5138 49.0241 58.8249 49.1051 59.2085 49.1051C59.6261 49.1051 59.9599 49.0185 60.2099 48.8452C60.4599 48.669 60.5849 48.4545 60.5849 48.2017C60.5849 47.9972 60.5082 47.8253 60.3548 47.6861C60.2042 47.5469 59.9727 47.4418 59.6602 47.3707L58.5522 47.1278C57.9414 46.9886 57.4897 46.767 57.1971 46.4631C56.9073 46.1591 56.7624 45.7741 56.7624 45.3082C56.7624 44.9219 56.8704 44.5838 57.0863 44.294C57.3022 44.0043 57.6005 43.7784 57.9812 43.6165C58.3619 43.4517 58.7979 43.3693 59.2894 43.3693C59.9968 43.3693 60.5536 43.5227 60.9599 43.8295C61.3661 44.1335 61.6346 44.5412 61.7653 45.0526Z" fill="#555555"/>
                      </svg>                     
                    }
                </Link>
        </footer>
    )
}

export default Footer