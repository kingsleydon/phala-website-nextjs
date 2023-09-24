import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 250 250"
    fill="none"
    {...props}
  >
    <g opacity={0.5} clipPath="url(#clip0_1994_26825)">
      <path
        d="M232.316 119.114L246.802 109.263C247.609 108.723 248.232 107.949 248.589 107.045C248.945 106.141 249.018 105.15 248.797 104.204L245.331 89.2714C245.11 88.3259 244.609 87.4692 243.893 86.8131C243.177 86.157 242.28 85.7321 241.319 85.5939L224.025 83.12C223.274 83.0083 222.559 82.7224 221.938 82.2851C221.317 81.8478 220.806 81.2712 220.448 80.6015L215.122 70.5721C214.764 69.9043 214.57 69.1614 214.554 68.4042C214.539 67.6469 214.703 66.8967 215.032 66.2149L222.632 50.4575C223.051 49.584 223.198 48.6045 223.053 47.6465C222.908 46.6885 222.478 45.7963 221.819 45.0862L211.355 33.8867C210.692 33.1798 209.831 32.689 208.885 32.4783C207.939 32.2676 206.951 32.3468 206.051 32.7055L189.804 39.2134C189.102 39.4881 188.347 39.5959 187.596 39.5282C186.846 39.4605 186.121 39.2192 185.48 38.8234L175.841 32.8058C175.205 32.4031 174.671 31.8565 174.284 31.21C173.897 30.5636 173.667 29.8353 173.613 29.0837L172.331 11.6437C172.258 10.6745 171.893 9.75011 171.284 8.99228C170.676 8.23444 169.852 7.6786 168.921 7.39787L154.268 2.94035C153.34 2.65484 152.348 2.65638 151.421 2.94474C150.495 3.2331 149.677 3.79481 149.075 4.55622L138.266 18.3077C137.801 18.9045 137.201 19.3823 136.515 19.702C135.829 20.0217 135.078 20.1739 134.321 20.1464L122.989 19.7564C122.231 19.7342 121.49 19.5328 120.826 19.1686C120.161 18.8044 119.593 18.2879 119.167 17.6613L109.316 3.1744C108.775 2.36804 108 1.74605 107.096 1.39159C106.192 1.03712 105.202 0.967086 104.257 1.1908L89.3248 4.64539C88.3794 4.86647 87.5227 5.36759 86.8666 6.08332C86.2106 6.79905 85.7856 7.69607 85.6474 8.65713L83.1736 25.9523C83.0619 26.7037 82.776 27.4185 82.3387 28.0396C81.9014 28.6607 81.3249 29.171 80.6552 29.5295L70.6263 34.8674C69.9568 35.2204 69.2138 35.4114 68.4571 35.4249C67.7003 35.4385 66.9509 35.2742 66.2692 34.9453L50.5126 27.3453C49.6391 26.9259 48.6597 26.7792 47.7017 26.9243C46.7437 27.0694 45.8516 27.4996 45.1415 28.1588L33.9982 38.6228C33.2888 39.2843 32.7962 40.1451 32.5853 41.0919C32.3745 42.0387 32.4552 43.0272 32.817 43.9273L39.3248 60.1638C39.5996 60.8672 39.7073 61.6249 39.6397 62.3771C39.572 63.1293 39.3307 63.8556 38.9348 64.4987L32.9174 74.1381C32.5174 74.7774 31.9715 75.3127 31.3245 75.7002C30.6775 76.0876 29.9478 76.3161 29.1954 76.3669L11.7562 77.6595C10.7871 77.7329 9.86275 78.0979 9.10495 78.7065C8.34715 79.3152 7.7913 80.139 7.51059 81.0695L3.05326 95.7236C2.76776 96.6512 2.76927 97.6435 3.05762 98.5702C3.34596 99.4969 3.90775 100.315 4.66913 100.917L18.4199 111.726C19.0167 112.191 19.4946 112.791 19.8142 113.477C20.1338 114.163 20.2862 114.915 20.2586 115.671L19.8685 127.004C19.8463 127.762 19.645 128.503 19.2808 129.167C18.9167 129.832 18.4 130.4 17.7735 130.827L3.28723 140.678C2.48091 141.219 1.85905 141.993 1.5046 142.897C1.15016 143.801 1.08012 144.792 1.30383 145.737L4.75822 160.67C4.97929 161.615 5.48046 162.472 6.19616 163.128C6.91186 163.784 7.80877 164.209 8.76978 164.347L26.0642 166.821C26.8155 166.933 27.5303 167.219 28.1514 167.656C28.7725 168.093 29.2827 168.67 29.6412 169.34L34.9789 179.369C35.3319 180.038 35.5229 180.782 35.5364 181.538C35.55 182.295 35.3856 183.044 35.0568 183.726L27.4571 199.484C27.0378 200.357 26.891 201.337 27.0361 202.295C27.1812 203.253 27.6114 204.145 28.2706 204.855L38.7341 216.054C39.3973 216.761 40.258 217.252 41.2041 217.463C42.1502 217.673 43.1379 217.594 44.0384 217.236L60.2741 210.728C60.9775 210.453 61.7352 210.345 62.4874 210.413C63.2396 210.48 63.9658 210.722 64.6089 211.118L74.2478 217.135C74.8871 217.535 75.4224 218.081 75.8098 218.728C76.1973 219.375 76.4257 220.105 76.4765 220.857L77.7692 238.297C77.8425 239.267 78.2074 240.191 78.816 240.949C79.4247 241.707 80.2484 242.262 81.1789 242.543L95.8324 247.001C96.7612 247.283 97.7536 247.279 98.68 246.989C99.6064 246.699 100.424 246.136 101.025 245.374L111.834 231.622C112.299 231.025 112.899 230.548 113.585 230.228C114.271 229.908 115.023 229.756 115.779 229.784L127.112 230.174C127.869 230.196 128.61 230.397 129.275 230.761C129.939 231.126 130.508 231.642 130.934 232.269L140.784 246.756C141.326 247.562 142.1 248.184 143.004 248.538C143.908 248.893 144.899 248.963 145.844 248.739L160.776 245.285C161.721 245.063 162.578 244.562 163.234 243.847C163.89 243.131 164.315 242.234 164.453 241.273L166.927 223.978C167.038 223.226 167.324 222.511 167.762 221.89C168.199 221.269 168.775 220.759 169.445 220.4L179.474 215.074C180.142 214.716 180.885 214.522 181.642 214.507C182.399 214.491 183.149 214.655 183.831 214.985L199.588 222.585C200.461 223.004 201.441 223.151 202.399 223.006C203.357 222.861 204.249 222.43 204.959 221.771L216.158 211.307C216.865 210.644 217.355 209.783 217.566 208.837C217.777 207.891 217.698 206.903 217.339 206.003L210.831 189.755C210.551 189.054 210.441 188.298 210.509 187.546C210.576 186.795 210.821 186.07 211.221 185.431L217.239 175.792C217.641 175.155 218.188 174.622 218.834 174.234C219.481 173.847 220.209 173.617 220.961 173.563L238.4 172.282C239.369 172.207 240.292 171.841 241.05 171.233C241.807 170.624 242.363 169.801 242.645 168.872L247.103 154.217C247.385 153.289 247.381 152.296 247.091 151.37C246.801 150.443 246.238 149.626 245.476 149.024L231.725 138.215C231.127 137.751 230.648 137.151 230.328 136.465C230.008 135.779 229.857 135.026 229.886 134.27L230.276 122.937C230.292 122.184 230.485 121.446 230.839 120.782C231.194 120.118 231.699 119.547 232.316 119.114ZM124.994 190.201C112.099 190.201 99.4935 186.377 88.7715 179.212C78.0496 172.048 69.6927 161.864 64.7579 149.95C59.8232 138.036 58.5321 124.926 61.0478 112.278C63.5636 99.63 69.7732 88.0121 78.8915 78.8934C88.0098 69.7747 99.6272 63.5647 112.275 61.0489C124.922 58.533 138.032 59.8242 149.945 64.7593C161.859 69.6943 172.042 78.0514 179.206 88.7739C186.37 99.4964 190.194 112.103 190.194 124.998C190.191 142.29 183.321 158.873 171.094 171.1C158.868 183.327 142.286 190.198 124.994 190.201Z"
        fill="url(#paint0_linear_1994_26825)"
      />
      <path
        d="M124.994 191.597C111.824 191.597 98.9487 187.691 87.9976 180.374C77.0466 173.056 68.5113 162.655 63.4711 150.487C58.4308 138.318 57.112 124.928 59.6815 112.01C62.251 99.0913 68.5934 87.2251 77.9065 77.9116C87.2196 68.5981 99.0851 62.2555 112.003 59.6859C124.92 57.1163 138.31 58.4351 150.478 63.4756C162.646 68.516 173.047 77.0517 180.364 88.0032C187.681 98.9548 191.587 111.83 191.587 125.002C191.566 142.658 184.544 159.584 172.059 172.069C159.575 184.553 142.649 191.576 124.994 191.597ZM124.994 63.343C112.8 63.343 100.879 66.9592 90.7402 73.7344C80.6009 80.5095 72.6984 90.1393 68.0318 101.406C63.3652 112.673 62.1442 125.07 64.5232 137.031C66.9022 148.991 72.7743 159.978 81.3971 168.601C90.0198 177.224 101.006 183.096 112.966 185.476C124.926 187.855 137.323 186.634 148.589 181.967C159.855 177.3 169.484 169.397 176.259 159.257C183.034 149.118 186.65 137.197 186.65 125.002C186.633 108.654 180.131 92.9813 168.572 81.4219C157.013 69.8625 141.341 63.3607 124.994 63.343Z"
        fill="url(#paint1_linear_1994_26825)"
      />
      <path
        d="M124.994 219.545C106.296 219.545 88.0179 214 72.4709 203.612C56.9239 193.223 44.8065 178.457 37.651 161.182C30.4956 143.906 28.6234 124.896 32.2712 106.556C35.919 88.2167 44.9231 71.3706 58.1447 58.1484C71.3663 44.9261 88.2117 35.9217 106.551 32.2737C124.89 28.6257 143.898 30.498 161.173 37.6538C178.448 44.8096 193.213 56.9276 203.601 72.4753C213.99 88.0229 219.534 106.302 219.534 125.001C219.505 150.067 209.535 174.097 191.812 191.821C174.088 209.545 150.059 219.516 124.994 219.545ZM124.994 51.0062C110.36 51.0062 96.0547 55.346 83.8869 63.4766C71.7191 71.6073 62.2354 83.1637 56.6352 96.6845C51.0349 110.205 49.5696 125.083 52.4246 139.437C55.2796 153.79 62.3266 166.975 72.6745 177.323C83.0224 187.672 96.2065 194.719 110.559 197.574C124.912 200.429 139.79 198.964 153.31 193.363C166.83 187.763 178.386 178.279 186.516 166.11C194.646 153.942 198.986 139.636 198.986 125.001C198.962 105.384 191.159 86.5765 177.288 72.7049C163.417 58.8333 144.611 51.0298 124.994 51.0062Z"
        fill="url(#paint2_linear_1994_26825)"
      />
      <path
        d="M246.111 148.146L232.349 137.347C231.891 136.987 231.526 136.524 231.282 135.995C231.038 135.466 230.922 134.887 230.945 134.305L231.335 122.972C231.351 122.39 231.507 121.821 231.788 121.311C232.069 120.801 232.468 120.366 232.951 120.041L247.437 110.19C248.428 109.522 249.193 108.568 249.631 107.456C250.068 106.344 250.158 105.125 249.889 103.961L246.423 89.028C246.15 87.8642 245.533 86.8094 244.653 86.0006C243.772 85.1918 242.669 84.6664 241.486 84.4925L224.203 82.0185C223.624 81.9301 223.074 81.7091 222.594 81.3728C222.115 81.0364 221.72 80.5938 221.44 80.0795L216.124 70.0501C215.849 69.5384 215.698 68.9688 215.685 68.3878C215.671 67.8069 215.795 67.2309 216.046 66.7069L223.646 50.9496C224.158 49.872 224.336 48.666 224.157 47.4865C223.978 46.307 223.451 45.2079 222.643 44.3302L212.18 33.1195C211.36 32.2505 210.298 31.6477 209.132 31.3894C207.966 31.1311 206.749 31.2291 205.639 31.6708L189.403 38.1788C188.969 38.3472 188.508 38.4341 188.043 38.4351C187.347 38.4376 186.663 38.2446 186.071 37.8779L176.443 31.8714C175.952 31.5588 175.54 31.1364 175.241 30.6374C174.941 30.1384 174.761 29.5766 174.716 28.9963L173.423 11.5674C173.331 10.3748 172.882 9.23755 172.135 8.30349C171.387 7.36943 170.377 6.68176 169.233 6.32983L154.58 1.87231C154.016 1.70397 153.43 1.61767 152.842 1.61602C151.947 1.61215 151.064 1.81061 150.257 2.19658C149.451 2.58255 148.742 3.14602 148.184 3.84478L137.386 17.6073C137.041 18.0431 136.603 18.3956 136.103 18.6387C135.603 18.8818 135.055 19.0092 134.5 19.0115L123.011 18.6214C122.429 18.6049 121.86 18.4497 121.35 18.1687C120.84 17.8876 120.405 17.4889 120.08 17.0056L110.23 2.51867C109.69 1.71983 108.963 1.06538 108.113 0.612713C107.262 0.160043 106.313 -0.0770642 105.349 -0.0778565C104.895 -0.0823709 104.442 -0.029942 104 0.078173L89.0685 3.53276C87.9006 3.79752 86.841 4.41173 86.0308 5.29363C85.2206 6.17553 84.6982 7.28329 84.5331 8.46945L82.0593 25.7535C81.9709 26.3324 81.7499 26.8831 81.4136 27.3625C81.0773 27.8419 80.6347 28.237 80.1204 28.5171L70.0914 33.8439C69.5471 34.1259 68.9438 34.2748 68.3308 34.2785C67.7784 34.2802 67.2331 34.1543 66.7373 33.9107L50.9918 26.3887C49.9162 25.8679 48.7083 25.685 47.5268 25.864C46.3453 26.043 45.2457 26.5756 44.3727 27.3916L33.1625 37.8556C32.2883 38.6718 31.6819 39.7338 31.4233 40.9016C31.1647 42.0693 31.2659 43.288 31.7138 44.397L38.2216 60.6224C38.4359 61.1645 38.5203 61.7492 38.4681 62.3297C38.4158 62.9103 38.2284 63.4705 37.9207 63.9656L31.9145 73.5938C31.6019 74.0849 31.1795 74.4965 30.6806 74.7962C30.1816 75.096 29.6198 75.2757 29.0395 75.3211L11.6114 76.6138C10.4188 76.7062 9.28158 77.1552 8.34756 77.9024C7.41355 78.6497 6.72587 79.6606 6.37395 80.8039L1.91663 95.4579C1.5761 96.6017 1.58396 97.821 1.93921 98.9602C2.29447 100.099 2.98106 101.107 3.91133 101.854L17.6733 112.664C18.1313 113.021 18.4977 113.483 18.7419 114.01C18.9861 114.537 19.101 115.115 19.0773 115.695L18.6874 127.028C18.6709 127.61 18.5156 128.18 18.2345 128.69C17.9535 129.199 17.5549 129.635 17.0716 129.959L2.58534 139.81C1.59407 140.478 0.829489 141.432 0.393543 142.544C-0.042403 143.657 -0.129114 144.876 0.144886 146.04L3.59928 160.972C3.86333 162.139 4.47596 163.197 5.35566 164.007C6.23536 164.817 7.34057 165.341 8.52467 165.508L25.8191 167.982C26.398 168.07 26.9486 168.291 27.428 168.628C27.9074 168.964 28.3025 169.407 28.5826 169.921L33.9091 179.95C34.1786 180.464 34.3248 181.034 34.3364 181.614C34.348 182.194 34.2246 182.769 33.9759 183.293L26.3763 199.051C25.8646 200.128 25.6868 201.334 25.8655 202.514C26.0442 203.693 26.5713 204.792 27.3792 205.67L37.8426 216.881C38.6623 217.75 39.7241 218.353 40.8904 218.611C42.0568 218.869 43.2738 218.771 44.3837 218.329L60.6196 211.821C61.0531 211.653 61.514 211.566 61.9791 211.565C62.6724 211.561 63.3526 211.754 63.9403 212.122L73.5793 218.129C74.0703 218.441 74.4819 218.864 74.7816 219.363C75.0814 219.862 75.261 220.424 75.3064 221.004L76.5991 238.433C76.6915 239.625 77.1404 240.763 77.8877 241.697C78.6349 242.631 79.6458 243.319 80.789 243.67L95.4424 248.128C96.0026 248.297 96.5844 248.383 97.1696 248.384C98.0655 248.389 98.9509 248.191 99.7595 247.805C100.568 247.419 101.279 246.855 101.839 246.156L112.648 232.393C112.989 231.956 113.425 231.603 113.923 231.36C114.422 231.116 114.968 230.99 115.523 230.989L127.011 231.379C127.593 231.395 128.163 231.551 128.673 231.832C129.182 232.113 129.618 232.511 129.942 232.995L139.793 247.482C140.332 248.28 141.059 248.935 141.91 249.388C142.761 249.84 143.71 250.077 144.673 250.078C145.128 250.083 145.581 250.03 146.022 249.922L160.954 246.468C162.122 246.203 163.181 245.589 163.992 244.707C164.802 243.825 165.324 242.717 165.489 241.531L167.963 224.247C168.051 223.668 168.272 223.117 168.609 222.638C168.945 222.158 169.388 221.763 169.902 221.483L179.931 216.168C180.441 215.889 181.011 215.736 181.593 215.722C182.175 215.709 182.751 215.835 183.274 216.09L199.031 223.69C200.106 224.21 201.314 224.393 202.496 224.214C203.677 224.035 204.777 223.503 205.65 222.687L216.86 212.223C217.734 211.406 218.34 210.344 218.599 209.177C218.858 208.009 218.756 206.79 218.309 205.681L211.801 189.445C211.583 188.903 211.497 188.318 211.549 187.737C211.601 187.156 211.791 186.595 212.102 186.102L218.108 176.462C218.42 175.971 218.843 175.56 219.342 175.26C219.841 174.96 220.403 174.78 220.983 174.735L238.411 173.442C239.603 173.35 240.741 172.901 241.675 172.154C242.609 171.406 243.296 170.395 243.648 169.252L248.106 154.598C248.458 153.447 248.457 152.216 248.101 151.065C247.745 149.914 247.052 148.897 246.111 148.146ZM247.047 154.219L242.59 168.873C242.308 169.803 241.751 170.626 240.994 171.234C240.236 171.843 239.313 172.208 238.344 172.283L220.905 173.565C220.153 173.619 219.425 173.849 218.779 174.236C218.132 174.623 217.586 175.157 217.183 175.794L211.166 185.433C210.765 186.072 210.521 186.797 210.453 187.548C210.385 188.3 210.496 189.056 210.776 189.757L217.283 206.004C217.642 206.905 217.721 207.893 217.51 208.839C217.3 209.785 216.809 210.646 216.102 211.309L204.903 221.773C204.193 222.432 203.301 222.862 202.343 223.007C201.385 223.152 200.406 223.006 199.532 222.586L183.775 214.986C183.094 214.657 182.343 214.493 181.586 214.508C180.829 214.524 180.086 214.718 179.418 215.075L169.389 220.402C168.72 220.761 168.143 221.271 167.706 221.892C167.269 222.513 166.983 223.228 166.871 223.979L164.397 241.297C164.259 242.258 163.834 243.155 163.178 243.871C162.522 244.586 161.665 245.088 160.72 245.309L145.788 248.763C144.843 248.987 143.852 248.917 142.948 248.562C142.044 248.208 141.27 247.586 140.729 246.78L130.878 232.293C130.452 231.666 129.883 231.15 129.219 230.785C128.555 230.421 127.813 230.22 127.056 230.198L115.723 229.808C114.967 229.78 114.215 229.932 113.529 230.252C112.844 230.572 112.244 231.049 111.779 231.646L100.969 245.398C100.368 246.16 99.5508 246.723 98.6244 247.013C97.6979 247.303 96.7054 247.307 95.7767 247.025L81.1233 242.567C80.1928 242.287 79.369 241.731 78.7604 240.973C78.1518 240.215 77.7867 239.291 77.7134 238.321L76.4207 220.881C76.37 220.129 76.1415 219.399 75.7541 218.752C75.3667 218.105 74.8314 217.559 74.1921 217.159L64.5532 211.142C63.9101 210.746 63.1838 210.504 62.4316 210.437C61.6794 210.369 60.9219 210.477 60.2185 210.752L43.9826 217.26C43.0821 217.618 42.0946 217.697 41.1485 217.487C40.2024 217.276 39.3416 216.785 38.6784 216.078L28.2149 204.879C27.5557 204.169 27.1256 203.277 26.9805 202.319C26.8354 201.361 26.982 200.381 27.4014 199.508L35.0012 183.75C35.33 183.069 35.4942 182.319 35.4807 181.562C35.4671 180.806 35.2761 180.063 34.9231 179.393L29.5855 169.364C29.227 168.694 28.7169 168.117 28.0958 167.68C27.4747 167.243 26.7598 166.957 26.0084 166.845L8.703 164.405C7.74199 164.266 6.84494 163.842 6.12924 163.185C5.41354 162.529 4.91237 161.673 4.6913 160.727L1.23691 145.794C1.0132 144.85 1.08324 143.859 1.43768 142.955C1.79213 142.051 2.41413 141.276 3.22045 140.735L17.7067 130.884C18.3333 130.458 18.8497 129.889 19.2139 129.225C19.5781 128.56 19.7796 127.819 19.8017 127.062L20.1917 115.729C20.2192 114.972 20.0669 114.22 19.7473 113.535C19.4276 112.849 18.9498 112.249 18.353 111.784L4.60221 100.974C3.84083 100.372 3.27918 99.5544 2.99084 98.6276C2.70249 97.7009 2.70098 96.7087 2.98648 95.7811L7.4438 81.127C7.72452 80.1964 8.28024 79.3726 9.03804 78.764C9.79584 78.1553 10.7202 77.7903 11.6893 77.717L29.1286 76.4243C29.881 76.3735 30.6106 76.1451 31.2576 75.7576C31.9046 75.3702 32.4504 74.8349 32.8505 74.1956L38.8679 64.5562C39.2638 63.913 39.5051 63.1868 39.5728 62.4346C39.6404 61.6824 39.5326 60.9247 39.2579 60.2213L32.7502 43.9847C32.3884 43.0847 32.3077 42.0962 32.5185 41.1494C32.7294 40.2025 33.2218 39.3417 33.9313 38.6803L45.0746 28.2163C45.7847 27.557 46.6769 27.1269 47.6349 26.9818C48.5929 26.8367 49.5723 26.9834 50.4458 27.4028L66.2024 35.0028C66.8841 35.3317 67.6334 35.4959 68.3901 35.4824C69.1469 35.4688 69.89 35.2779 70.5595 34.9248L80.5885 29.5869C81.2581 29.2284 81.8346 28.7182 82.2719 28.0971C82.7092 27.476 82.995 26.7611 83.1067 26.0098L85.5806 8.71462C85.7188 7.75356 86.1437 6.85654 86.7997 6.14081C87.4558 5.42508 88.3125 4.92392 89.2579 4.70284L104.19 1.24826C105.135 1.02454 106.126 1.09461 107.03 1.44908C107.934 1.80354 108.708 2.4255 109.249 3.23185L119.1 17.7188C119.526 18.3453 120.094 18.8619 120.759 19.2261C121.423 19.5903 122.165 19.7917 122.922 19.8138L134.255 20.2039C135.011 20.2314 135.762 20.0791 136.448 19.7595C137.134 19.4398 137.734 18.9619 138.199 18.3652L149.008 4.61367C149.61 3.85226 150.428 3.29055 151.355 3.0022C152.281 2.71384 153.273 2.71233 154.201 2.99784L168.855 7.45536C169.785 7.73609 170.609 8.29193 171.217 9.04977C171.826 9.8076 172.191 10.7319 172.264 11.7011L173.546 29.1412C173.6 29.8927 173.83 30.621 174.217 31.2675C174.604 31.9139 175.138 32.4605 175.774 32.8632L185.413 38.8809C186.055 39.2767 186.779 39.518 187.529 39.5857C188.28 39.6534 189.035 39.5456 189.737 39.2709L205.984 32.7629C206.884 32.4042 207.872 32.3251 208.818 32.5358C209.764 32.7465 210.625 33.2373 211.288 33.9442L221.752 45.1437C222.411 45.8538 222.841 46.7459 222.986 47.704C223.131 48.662 222.985 49.6415 222.565 50.515L214.966 66.2723C214.636 66.9542 214.472 67.7044 214.487 68.4616C214.503 69.2189 214.697 69.9618 215.055 70.6296L220.381 80.659C220.74 81.3287 221.25 81.9052 221.871 82.3425C222.492 82.7798 223.207 83.0657 223.958 83.1775L241.253 85.6514C242.214 85.7896 243.111 86.2145 243.826 86.8706C244.542 87.5267 245.043 88.3834 245.264 89.3289L248.73 104.262C248.951 105.208 248.878 106.199 248.522 107.102C248.165 108.006 247.542 108.78 246.735 109.321L232.249 119.172C231.622 119.598 231.106 120.167 230.741 120.831C230.377 121.496 230.176 122.237 230.154 122.994L229.764 134.328C229.736 135.084 229.888 135.836 230.208 136.521C230.528 137.207 231.006 137.807 231.602 138.272L245.353 149.082C246.117 149.671 246.686 150.475 246.988 151.391C247.29 152.307 247.31 153.292 247.047 154.219Z"
        fill="url(#paint3_linear_1994_26825)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1994_26825"
        x1={80.8001}
        y1={17.5276}
        x2={187.717}
        y2={277.509}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBEB" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1994_26825"
        x1={-98.507}
        y1={-122.023}
        x2={179.922}
        y2={185.679}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1994_26825"
        x1={80.9895}
        y1={38.5809}
        x2={280.224}
        y2={429.844}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1994_26825"
        x1={203.934}
        y1={21.764}
        x2={-90.9459}
        y2={407.349}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <clipPath id="clip0_1994_26825">
        <rect width={250} height={250} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
