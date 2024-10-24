
## 波動力学

　前回まで電子が波としての性質を有することを述べたが、粒子とされていたものが波でないかという考えは過去に光学にもあった。光学においては光を粒子としてその経路により光の振る舞いを説明していたが、多くの実験も踏まえて光が波であることが実証された。このとき、光学でも幾何光学から波動光学というように移動したわけだが、今回も同じように力学でも粒子から波動に置きかえてみると新しい法則が見つかるのではないかということが推測される。

　幾何光学の法則が力学の法則と同じ形をしているということは最小作用の原理のような進んだ理論をまたずとも、すでにNewtonの時代に注目され、Newtonはこれによって光の粒子論を展開しようとしていたのである。最も簡単な具体的な例として光の屈折を考えてみよう。

<p align="center">
    <img width="40%"
        src="images/newton_refraction.png">
</p>

上図に示すように、屈折率 $n_1$ の媒質と $n_2$ の媒質とが 平面$XX$ を境にして接続しているとする。1本の（単色）光線がAからBに進んでいくとき、その進路AOBは、Snellの法則
$$
    \frac{\sin\theta_1}{\sin\theta_2}=
    \frac{n_1}{n_2}
$$
を満たす。ただし、$\theta_1$ は入射角、$\theta_2$ は屈折角である。これがこの場合の幾何光学の法則である。Newtonはこの現象を粒子的な立場に立って次のように理解しようとしていた。光の粒子が媒質Aから媒質Bに入射するとき、その境界面 $XX$ を通過する際、その面に直角な力の作用を受ける。その力は、面に直角であるので粒子の速度の法線成分を変化させる（図の場合では増加する）。こうして粒子の進路はここで屈曲することになる。このとき、この力を保存力と仮定すれば、第一の媒質中と第２の媒質中とで粒子のポテンシャルに差異があるはずである。エネルギーに対して適切な零点をとって、第一媒質中のポテンシャルを $V_1$、第２媒質中のポテンシャルを $V_2$ とする。更に質点の全エネルギーを $E$ とすると、第一媒質中での質点の速度 $v_1$ は

$$
    \frac{1}{2}mv_1^2=E-V_1
$$

を満たし、第二の媒質中の速度 $v_2$ は

$$
    \frac{1}{2}mv_2^2=E-V_2
$$

を満たす。$m$ はことわるまでもなく粒子の質量である。これから直ちに

$$
    v_1=
    \sqrt{
        \frac{2}{m}(E-V_1)
    }、
    v_2=
    \sqrt{
        \frac{2}{m}(E-V_2)
    }
$$

を得る。ところで、粒子が XX を通過するとき働く力は法線方向であると考えたから、そのとき速度の接線成分は変化しないはずである。従って、

$$
    v_1\sin\theta_1=v_2\sin\theta_2
$$

が成立する必要がある。この式に求めた速度を代入すると

$$
    \frac{\sin\theta_1}{\sin\theta_2}=
    \frac{\sqrt{E-V_2}}{\sqrt{E-V_1}}
$$
が得られる。これと幾何光学の法則を比べて、屈折率 $n$ なるものの粒子論的な意味が明らかになる。すなわち、$k$ を何らかの定数として、屈折率は

$$
    n=k\sqrt{E-V}
$$

比例定数 $k$ はこの考察だけでは決定されない。また、このことは最小作用の原理とFermatの法則を比べてみても推測されることである。

　屈折率の粒子論的解釈を次のように言ってもよい。すなわち、運動量を $p$ とすると

$$
    p=\sqrt{2m(E-V)}
$$

が成立するから、先ほどの式を

$$
    n=k'p
$$

というように書くと、屈折率とはその場所での粒子の運動量に比例する量であると考えることができる。ただし、このときの比例定数 $k'$ も決定されないことは注意されたし。

　一方で、波として扱った場合にも、Huygensの原理に従って以下の図のように考えることができる。

<p align="center">
    <img width="40%"
        src="images/huygens_refraction.png">
</p>

このとき屈折する前後の波長の関係は、媒質1の中での波の波長を $\lambda_1$ 、媒質2の中でのそれを $\lambda_2$ とすると、

$$
    \frac{\lambda_1}{\sin\theta_1}=
    \frac{\lambda_2}{\sin\theta_2}
    \rightarrow
    \frac{\sin\theta_1}{\sin\theta_2}=
    \frac{\lambda_1}{\lambda_2}
$$

となる。そのため、屈折率とはその場所での波長に逆比例するものであるといってもよい。すなわち、比例定数$k''$を用いて
$$
    n=\frac{k''}{\lambda}
$$
と表わされることになる。

　以上のように、粒子的な立場あるいは波動論的な立場で考えることで運動量と波長の逆数が関係していることがうかがえる。このことから、光以外のものについても一般的に二つの側面から考察が可能であると予想できる。すなわち、電子流の進行というようなものを波動論的立場によって取り扱うことで、光が粒子的な