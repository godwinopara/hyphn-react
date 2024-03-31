import * as React from "react";
import { SVGProps } from "react";
export const PhysicianIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={80}
      height={80}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M0 0h80v80H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#2B2B2A" d="M0 0h80v80H0z" />
    </g>
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEUTE0MiKmQiKGMhKmQiKmSZwj9sAAAABHRSTlMAdRzeZrVurwAABOVJREFUaN6tWeu5qyAQFLQAMRSgiQUkxgLikf5ruixvBHRJrj/Ol2NwHPYx7G6a5uKi03sVbzY2X17TKtS1f4dAb8JeXyFQDo++GAOc7cvnX6P92FcDyPfugwVb6yk85PP+raSaAomebxou/mq8x5JdE7HXsRdiiW9y/B6I8vzRaC1+D3M2cgjeD6sYyLqkt3f0DuSr7ul9LpDh3IpnYWdIK5bMXQJOAfbS1pBuCKwdCQlFuoH6F5E4mJAARHz8rvcv/BjYao7jmWMBeh9RUUZxgQzk3lljX8OQRkaSXybTR+blNnpoJEAYUTzQNWQoOlMRoE/BDjtjbEADOGdpEaPmaJH0sQCbk6U+PF16LICJN+KFfLoBi2fToQBMxAPzYPl9kvE5IwH+zKG6HFMRxwBW0vQwBNwZDQCquo3JzrAMPhA9rzG17VwBMOScg2XwzObtimdQBMAxaH9l0P4PBjnxk/d+ZLD/agM8g/5XG/RZ+a3wQp9VT1HDIPMqKmoYtOlKvB7Aw8HxGDoHzyBzkMPDeAaZUFzRsq4AkipH1akVDB7HamaGGxUMiIgjQYp831TkAuxhiQlsTVORjfA3XEyEulnDoAkrC9uu1DBQ/YZBIPaUwzF4mBoLKgsoEynTZ7tisGCORgOgan7xNtVBoxkgusfZA9jKQryMPsjvLotdONUtwKAri51ZherEdevWCg8gk0rWRmAHx2C9pMDFKwA4FG6dYOKq0lvFZLQgrCpn64WeX/QMstuxYhIq8+zioL2o2GUUWYBQEkxwSRy6nu9BLjF9SSRK5l6n9PZ5USebxW0oi9TnwkX7KXkbgDhxVhWCXV4uD6eH6XjivWqJU6CnANQB0LjZ0cS7vN4ea0R4BTmEnEwxZhhwDMAtCfoVCj80g9UpgDcOZJWyxLpdADTCVvfxsWBunntBAhA1O2LdEeBDVOsynPe/VL9o64+NNvyrG4/1NBL17IOljbYOKz1YGy4mb3r2c9iqyW1N4nU6OWPZPtn9N5stlgd/2S7V8+HiLYJOMh6cKfntc02ms4i08jhlt0H07v1jkRvcPw8V5zyjzrPuUbwKRGWSjQp9yiu6f4mSDPGwSX+i92G02Uxu7GFzdEri0ZrZGx+WKMNKZiDrugVeSsMMmyKSCWN2iel59x6WcxGmWJLUllLrxnBcuInsrnRGTSOKwwwLoIN5sSHzGu4MqP+BTcZA088AZD7tmouOF4hQaLyfYXAUAbj8QFZTqA1Biaae9cFRBFAkVZUYpBNXVeqIAdBPqdlH4Cn4hGRgDgWuy93wSyXs/NIG7lzbgtUqKCWrYRKXXrDjC9hD5wE+ZqoVmqVgRBMqUEe4DesPj0iqT9zY2z04EZhdCi7NJcCsn4L2gHpQvfPp3jSIUN41zp7LUARAoyVDVftWinNnURlA9yoPiCSz9+xZVAYIhvjGDdlpcBkAhHuLZDFb5J8APITlQKyy1AFQH28WoKkCCN6o/ZctSc4AyBIdb/mK4gzgcKjnKwocgHJgfqaPAyDlfhcHQLWujF8DKAfk60IkACwrf4MCGMlPAB30H58fAKQLC7/MIAGkHwsdOxJA+rHwmwISQPqwUN1jAbgofoEDKPbrCUChjWhFoThPaqTCVos/1SbrOfw+nV43Ubq/JZOTymtJRyd111io9pGXr/f/AdyBeF0kx7CjAAAAAElFTkSuQmCC"
        id="c"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);

export const MedicationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={80}
      height={80}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M0 0h80v80H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#2B2B2A" d="M0 0h80v80H0z" />
    </g>
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEUhJGEhKmQiKmQiKmMiKmQiKmQlbFV7AAAABXRSTlMAmmEa0Rh6vv8AAARgSURBVGje7ZlBd6MgEMcVzL2b1LvdxLtp4j2bDfdNIt//qywiwswAgul7e9hXDn1t1R8zzPBngKIINv4h5GIbrl2x1FqZbPel70uZ0X4vAEQOYOi+ZoCUlyigVx6eFseo4LWUj+hT9bApEo0rH6IPl+AwUF0c/icNqOJmMinf0oDyq4CFt74B34D/DnD8EWi7FYCgNg75ABbWwiYbwMOALt+FemFFyQLwn4HWfWfiPwCcjl8CHHX6vg44mHxvXgQcMqqHJUCZWQLFAFz7P9w0YfcCoBo/3yvQQS6VD3GAsL4f0pEIAJh0S36brFICgB58xGS8gokCBKw52qUyLgxgyGoV0WfxSQR5P762jQHOuE+hUkEEBLmOimqNvVY+sJAgz914AE6ybyPlPiTIUYB2Gv/9VgcEuY250JJ/qBcuLCDIfB8ZREGSlyfiyPwOH6sKXgrovQ5XAmqauitd4J6ErARUJIhpcSfPW694rxLbFgIQngL1ifmMAczXjzohahjgB5GnhBkD/H1amdo4IQD3l5I2paoIUOmp1pGpsUITW28xYutU2UjXdWlUlwBqwB4HvKOvU6qOAP34ewsXRBRE5kszAejueO3KWDw1RKpWNt3ptdlUFnBq8GStXJmcYcIGEwaRJ2vlFkAnY3AQ60StzN1MPI4vPGgQScXcUABcEM5TMNNBhIAeppROh62yc+x2nwcQsDtuHB6mn9sMAMl6jofs3iUBFcl6JvKOmyzAk1OyqMdssGconpxO1aJUP9+lCesSgHkLgp5V107VBwV7D5WcJ93OBlBR6WLmmxEwhRUPw4fzbi5EGlrp6D4ngCb8xpUUnpYtGQI2f2AAIxCYAGfWwwDudASmcZ8BDFW9PQA8TQcPsp6Y12eAPhxEDt7GZt8TGFDZty2AgxKaz5LDrGME4NYTC4CTu5xH1BXj2AXuRswBwGypXPa4DfojXCw6wDhflRpvJ0A3D7W1+Y6Lgjcf0Fsx3UwAGBmcB7X7CgBKe4prLAAGkEwU6AHJnstsAYNnwiVZ5p8BgNHlZragh1syJEiQBgHK5EkhtQUcH0rDNQRWZhCwmWVTW9DjPSHcHG2AvkKAVZ/xBU7mZwV4Pe41KKBdTxQCAmFpRwCX+Z8n72agtap1gPMOAmzdrCw4e0qtNey6P32+yyRgE7yaaIMXHxBg9w5VcKngIgWwu5eNU6LIUrLsAm9leE/9Odlwr+OAwehY5HKGf9zkbavyIBpGmXW6Ekuk0iuxMm4tIKBy3+9StxbB2WhXg19Nsu65hKfzoBfUZOHEgThAgEgfK/mzCQBYKHmil0eND6iStX8ReBUA2oybL2fs3QPw9LFW6CjIAar8IdARf1KAyDqg9E6wLKDMOV1EPjwxoF7jwVRENRBwlvkxmOVJF0kGwGTW7SMxYSRMAF05N6sA3OycNEBL1ToDZvXYqvTTQr8qBORsWGadzgacqHMvuHMI1+KlNnsx7IoXG1M6r4Q+PX5/AYewZfoPohHuAAAAAElFTkSuQmCC"
        id="c"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);

export const WeightLossIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={80}
      height={80}
      fill="none"
      {...props}
    >
      <mask
        id="b"
        width={80}
        height={80}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="url(#a)" d="M0 0h80v80H0z" />
      </mask>
      <g mask="url(#b)">
        <path fill="#2B2B2A" d="M0 0h80v80H0z" />
      </g>
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#c" transform="scale(.00781)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEUjI1EiKmMiKmQhKmQiKmRPtusSAAAABHRSTlMAPYPG/Ym8VAAAAx1JREFUaN7tWG2OozAMJXQPEE05AFU5QFtxgC34/mda8m2ITRzY0c5KzY9R8ZAXJ37PNmmanzyuADeJjRsXWMajbGPHaF6ey7ZdBwD6ko0dHcxajfAu2dgxwO+m+QVTybZzBLpp1HrDlI0dAOnvnu37AE5vYTCEyQ7xIT7Edom3VuugUzZuqBH8mPWebYdGcUx7NmJ8jfPNcvbLvHmz4mFtnAQK06Kt5zSInRwIx4NtZjVYOLpo6zkNboLH2t7EDmQaZHUJQgJzpFZSCXGyOg1wegvLP2QaZHU5OL1tUqnMhon02Cp7S5qWI5ICYTlhS8yVKF4tsVjLVpg7wDOTOFFSv9gyq9gUXbYVcvz/DFB3iHSNkIfxG3qVKip/epUf2qsonydtZbuO8xPZJlkQfF8y+XTzTLb9MLoOAFfnQJ9o68sKMGs62sJqCKgcpz0TFExa2eWfrcwB31akzWjXHERbWQH4oD33O1n0PNtxRzc4n1tZ9AiqWJOYPwRZw4OMwacBTm+B6ADGqkMkOoAuhPF9MJVebFCdEg8lcxWorOXZvM+UXWj294tXVTUg4x0SyvGafK2Z/+kKPl3Bpyv4GzcYIScKbzA6pNH7OL9QcRXdYCiU5oaQtEQXAcnd9/qe4+1dkN1g2E81jb7a3KP8BqPza7qfL63uqKAIbjBUXNOQZPJvVNxgpG2bffv6mUJVvMEwBRCgs1MjSazuhLo0UwFcHR1C2bug9wuktjOXLVsXhuAnLuEFWdmJyy8LNAZC4QULAK1x3fzqltXTWwigpMtBOwA1GTsBUNKlCr7oht6C5AYjuE4eoiTBJwAijJISEwBIIkmKXACgqNzQnfm6zMbw5WKSFf/4kMu5EgAnlEMAWNsVAIvLryypVgC4OZpAkwFsva4qnvjzrD8IkEVOBpCIlHFHBJConLNXBJDElOtHAoDknCtYAoD6tTHlkFkOgOpCnsUkACipokRc8V2J0vppgNNb2Bxi4LW8h9uEUQiA6sKGSEIARKQNlYUAuC6cFdNhOcdacTShrE70SErbfpTHpHoAQPn++jDAPx1/ADwpvLdr7jvxAAAAAElFTkSuQmCC"
          id="c"
          width={128}
          height={128}
        />
      </defs>
    </svg>
  )
