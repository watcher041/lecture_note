
## 見かけの力（慣性力）

一般的な慣性力を求める。

<p align="center">
    <img width="50%" src="images/rotate_coordinate.png">
</p>

$$
    X=x\cos\theta+y\sin\theta、
    Y=-x\sin\theta+y\cos\theta
$$

となるが、この逆変換を求めると

$$
    x=X\cos\theta-Y\sin\theta、
    y=X\sin\theta+Y\cos\theta
$$

これらから速度を求める。

$$
    v_x=
    v_X\cos\theta-v_Y\sin\theta-
    X\omega\sin\theta-Y\omega\cos\theta=
    (v_X-Y\omega)\cos\theta-
    (v_Y+X\omega)\sin\theta
$$
$$
    v_y=
    v_X\sin\theta+v_Y\cos\theta+
    X\omega\cos\theta-
    Y\omega\sin\theta=
    (v_X-Y\omega)\sin\theta+
    (v_Y+X\omega)\cos\theta
$$

極座標のときと違い、各成分に $\omega$ に応じた成分が表れる。この部分は座標系自体の回転速度になっている。実際、Y軸上のある一点（$X=0,v_X=v_Y=0$）での速度は

$$
    v_x=-Y\omega\cos\theta、
    v_y=-Y\omega\sin\theta
$$

であり、X軸上のある一点（$Y=0,v_X=v_Y=0$）での策度は

$$
    v_x=-X\omega\sin\theta、
    v_y=X\omega\cos\theta
$$

となる。つまり、座標系の動く速度分だけ加速されていることから、それにともなう力がかかっているように感じることになる。このように、座標系自体が動くことで働いているように感じる力のことを慣性力と呼ぶ。